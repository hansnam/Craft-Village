import gomBg from "./backgrounds/gom.png";

export const HOME_BACKGROUND = {
  url: gomBg,
  className: "craft-page-bg-pattern--gom",
};

export const FACILITY_BACKGROUND = HOME_BACKGROUND;

export function getVillageBackground() {
  return HOME_BACKGROUND;
}
