document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.querySelector("[data-copy-email]");

  if (copyButton) {
    const status = copyButton.querySelector(".stuff-copy-status");
    const label = copyButton.querySelector(".stuff-action-label");
    const originalLabel = label ? label.textContent : "";
    let resetTimer;

    copyButton.addEventListener("click", async () => {
      const email = copyButton.getAttribute("data-email");
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        copyButton.classList.add("is-copied");
        if (status) status.textContent = "Copied";
        if (label) label.textContent = originalLabel;

        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          copyButton.classList.remove("is-copied");
          if (status) status.textContent = "";
        }, 1800);
      } catch (error) {
        copyButton.classList.remove("is-copied");
        if (status) status.textContent = "Copy failed";
      }
    });
  }
});
