const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  if (tab) {
    tab.addEventListener("click", e => {
      const target = e.target.closest("[data-tab-caption]");
      if (!target) return;
      const captionId = target.dataset.tabCaption;
      const content = tab.querySelector(`[data-tab-content='${captionId}']`);
      if (!content) return;

      const captions = tab.querySelectorAll("[data-tab-caption]");
      captions.forEach(caption => caption.classList.remove("active-tab-caption"));

      const contents = tab.querySelectorAll("[data-tab-content]");
      contents.forEach(el => el.classList.remove("active-tab-content"));

      target.classList.add("active-tab-caption");
      content.classList.add("active-tab-content");
    });
  }
});
