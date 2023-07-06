const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

// tabList.addEventListener("keydown", changeTabFocus);

// const tabFocus = 0;
// function changeTabFocus(e) {
//   const keydownLeft = 37;
//   const keydownRight = 39;
//   if(e.key === keydownLeft || e.key === keydownRight) {
//     tabs[tabFocus].setAttribute()
//   }
// };

tabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    // Hidding content
    hideContent(mainContainer, "picture");
    hideContent(mainContainer, '[role="tabpanel"]');

    // showing content
    showContent(mainContainer, `#${targetPanel}`);
    showContent(mainContainer, `#${targetImage}`);
  });
});

const hideContent = (parent, content) => {
  // parent
  //   .querySelectorAll(content)
  //   .forEach((item) => item.setAttribute("hidden", true));

  parent
    .querySelectorAll(content)
    .forEach((item) => item.classList.add("hidden"));
};

const showContent = (parent, content) => {
  parent.querySelector(content).classList.remove("hidden");
};
