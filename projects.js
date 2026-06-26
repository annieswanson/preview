document.addEventListener("DOMContentLoaded", () => {
  const syncProjectMediaHeight = () => {
    const reference = document.querySelector(
      ".project-media:not(.project-media--trimmed) img, .project-media:not(.project-media--trimmed) video"
    );
    const trimmed = document.querySelector(".project-media--trimmed");

    if (!reference || !trimmed) return;

    const referenceHeight = reference.getBoundingClientRect().height;
    if (!referenceHeight) return;

    trimmed.style.height = `${referenceHeight}px`;
    trimmed.style.minHeight = `${referenceHeight}px`;
    trimmed.style.maxHeight = `${referenceHeight}px`;
  };

  syncProjectMediaHeight();
  window.addEventListener("resize", syncProjectMediaHeight);
});
