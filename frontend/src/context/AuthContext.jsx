import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { users as initialMockUsers } from "../data/mockData.js";

const USERS_STORAGE_KEY = "users";
const CURRENT_USER_STORAGE_KEY = "currentUser";
const TOAST_DURATION_MS = 3500;

export const AuthContext = createContext(null);

function readOrInitializeUsers() {
  try {
    const rawUsers = window.localStorage.getItem(USERS_STORAGE_KEY);
    if (rawUsers === null) {
      window.localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify(initialMockUsers)
      );
      return [...initialMockUsers];
    }

    const parsed = JSON.parse(rawUsers);
    if (Array.isArray(parsed)) {
      return parsed;
    }

    window.localStorage.setItem(
      USERS_STORAGE_KEY,
      JSON.stringify(initialMockUsers)
    );
    return [...initialMockUsers];
  } catch {
    return [...initialMockUsers];
  }
}

function readStoredCurrentUser() {
  try {
    const rawCurrentUser = window.localStorage.getItem(
      CURRENT_USER_STORAGE_KEY
    );
    if (!rawCurrentUser) return null;
    const parsed = JSON.parse(rawCurrentUser);
    return parsed && typeof parsed === "object" && parsed.userName
      ? parsed
      : null;
  } catch {
    return null;
  }
}

function CraftToastStack({ toasts, onDismiss }) {
  if (!toasts.length) return null;

  return (
    <div
      className="craft-toast-stack"
      role="region"
      aria-label="Thông báo hệ thống"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`craft-toast craft-toast--${toast.type}`}
          role="status"
        >
          <span className="craft-toast__icon" aria-hidden="true">
            {toast.type === "error" ? (
              <svg viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
                <path d="M10 6.2v4.6" />
                <circle cx="10" cy="13.8" r="0.6" fill="currentColor" />
              </svg>
            ) : (
              <svg viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
                <path d="m6.6 10.2 2.3 2.3 4.6-4.8" />
              </svg>
            )}
          </span>

          <div className="craft-toast__content">
            <p className="craft-toast__title">{toast.title}</p>
            {toast.message && (
              <p className="craft-toast__message">{toast.message}</p>
            )}
          </div>

          <button
            type="button"
            className="craft-toast__close"
            aria-label="Đóng thông báo"
            onClick={() => onDismiss(toast.id)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="m4 4 8 8M12 4l-8 8" />
            </svg>
          </button>

          <span
            className="craft-toast__progress"
            style={{ animationDuration: `${TOAST_DURATION_MS}ms` }}
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => readStoredCurrentUser());
  const [authModalMode, setAuthModalMode] = useState(null);
  const [toasts, setToasts] = useState([]);
  const pendingActionRef = useRef(null);
  const toastTimersRef = useRef(new Map());

  // Khởi tạo danh sách users trong localStorage ngay lần chạy đầu tiên
  useEffect(() => {
    readOrInitializeUsers();
  }, []);

  useEffect(() => {
    const timers = toastTimersRef.current;
    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId));
      timers.clear();
    };
  }, []);

  const dismissToast = useCallback((toastId) => {
    const timerId = toastTimersRef.current.get(toastId);
    if (timerId) {
      window.clearTimeout(timerId);
      toastTimersRef.current.delete(toastId);
    }
    setToasts((prev) => prev.filter((item) => item.id !== toastId));
  }, []);

  const showToast = useCallback(
    ({ title, message = "", type = "success" }) => {
      const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev.slice(-2), { id, title, message, type }]);

      const timerId = window.setTimeout(() => {
        toastTimersRef.current.delete(id);
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, TOAST_DURATION_MS);

      toastTimersRef.current.set(id, timerId);
    },
    []
  );

  const openAuthModal = useCallback((mode = "login", onSuccess = null) => {
    pendingActionRef.current =
      typeof onSuccess === "function" ? onSuccess : null;
    setAuthModalMode(mode === "register" ? "register" : "login");
  }, []);

  const openLoginModal = useCallback(
    (onSuccess = null) => openAuthModal("login", onSuccess),
    [openAuthModal]
  );

  const openRegisterModal = useCallback(
    (onSuccess = null) => openAuthModal("register", onSuccess),
    [openAuthModal]
  );

  const closeAuthModal = useCallback(() => {
    pendingActionRef.current = null;
    setAuthModalMode(null);
  }, []);

  const runPendingAction = useCallback((authenticatedUser) => {
    const callback = pendingActionRef.current;
    pendingActionRef.current = null;
    if (typeof callback === "function") {
      callback(authenticatedUser);
    }
  }, []);

  const login = useCallback(
    ({ userName, password }) => {
      const trimmedUserName = (userName || "").trim();
      const rawPassword = password || "";

      if (!trimmedUserName || !rawPassword) {
        return {
          ok: false,
          error: "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.",
        };
      }

      const storedUsers = readOrInitializeUsers();
      const foundUser = storedUsers.find(
        (user) =>
          user.userName === trimmedUserName && user.password === rawPassword
      );

      if (!foundUser) {
        return {
          ok: false,
          error: "Sai tên đăng nhập hoặc mật khẩu",
        };
      }

      window.localStorage.setItem(
        CURRENT_USER_STORAGE_KEY,
        JSON.stringify(foundUser)
      );
      setCurrentUser(foundUser);
      setAuthModalMode(null);

      showToast({
        type: "success",
        title: "Đăng nhập thành công!",
        message: `Xin chào, ${foundUser.userName}.`,
      });

      runPendingAction(foundUser);
      return { ok: true, user: foundUser };
    },
    [runPendingAction, showToast]
  );

  const register = useCallback(
    ({ userName, password, confirmPassword }) => {
      const trimmedUserName = (userName || "").trim();
      const rawPassword = password || "";
      const rawConfirm = confirmPassword || "";

      if (!trimmedUserName || !rawPassword || !rawConfirm) {
        return {
          ok: false,
          error: "Vui lòng điền đầy đủ tất cả các trường thông tin.",
        };
      }

      if (/\s/.test(trimmedUserName)) {
        return {
          ok: false,
          error: "Tên đăng nhập không được chứa khoảng trắng.",
        };
      }

      if (rawPassword !== rawConfirm) {
        return {
          ok: false,
          field: "confirmPassword",
          error: "Mật khẩu xác nhận không khớp.",
        };
      }

      const storedUsers = readOrInitializeUsers();
      const duplicateUserName = storedUsers.some(
        (user) =>
          (user.userName || "").toLowerCase() ===
          trimmedUserName.toLowerCase()
      );

      if (duplicateUserName) {
        return {
          ok: false,
          field: "userName",
          error: "Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.",
        };
      }

      const newUser = {
        id: `USR_${Date.now()}`,
        userName: trimmedUserName,
        password: rawPassword,
      };

      const updatedUsers = [...storedUsers, newUser];
      window.localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify(updatedUsers)
      );
      window.localStorage.setItem(
        CURRENT_USER_STORAGE_KEY,
        JSON.stringify(newUser)
      );

      setCurrentUser(newUser);
      setAuthModalMode(null);

      showToast({
        type: "success",
        title: "Đăng ký tài khoản thành công!",
        message: `Chào mừng ${newUser.userName} gia nhập Craft Folio.`,
      });

      runPendingAction(newUser);
      return { ok: true, user: newUser };
    },
    [runPendingAction, showToast]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    setCurrentUser(null);

    showToast({
      type: "info",
      title: "Đã đăng xuất tài khoản",
      message: "Hẹn gặp lại bạn trên Craft Folio.",
    });
  }, [showToast]);

  const requireAuth = useCallback(
    (actionCallback) => {
      if (currentUser) {
        if (typeof actionCallback === "function") {
          actionCallback(currentUser);
        }
        return true;
      }

      openLoginModal(actionCallback);
      showToast({
        type: "info",
        title: "Cần đăng nhập",
        message: "Vui lòng đăng nhập để tiếp tục thực hiện thao tác này.",
      });
      return false;
    },
    [currentUser, openLoginModal, showToast]
  );

  const contextValue = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      greetingText: currentUser ? `Xin chào, ${currentUser.userName}` : "",
      authModalMode,
      openAuthModal,
      openLoginModal,
      openRegisterModal,
      closeAuthModal,
      login,
      register,
      logout,
      requireAuth,
      showToast,
    }),
    [
      currentUser,
      authModalMode,
      openAuthModal,
      openLoginModal,
      openRegisterModal,
      closeAuthModal,
      login,
      register,
      logout,
      requireAuth,
      showToast,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      <CraftToastStack toasts={toasts} onDismiss={dismissToast} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth() phải được sử dụng bên trong <AuthProvider>.");
  }
  return context;
}

