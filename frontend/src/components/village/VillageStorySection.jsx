import React from "react";
import StoryThreeImages from "./story/StoryThreeImages.jsx";
import StoryFourImages from "./story/StoryFourImages.jsx";
import StoryTwoImages from "./story/StoryTwoImages.jsx";

export default function VillageStorySection({ village }) {
  const story = village?.story;
  const template = story?.template;

  if (!story || !template) return null;

  switch (template) {
    case "story-three-images":
      return <StoryThreeImages village={village} story={story} />;
    case "story-four-images":
      return <StoryFourImages village={village} story={story} />;
    case "story-two-images":
      return <StoryTwoImages village={village} story={story} />;
    default:
      return null;
  }
}

