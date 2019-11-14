import childListObserver from "./childListObserver";
export default (ids: string[]) => {
  childListObserver(".ocean-ui-plugin-mention-ac-item-icon", icons => {
    for (const icon of icons) {
      const parser = new URL(icon.getAttribute("src"));
      const id = parser.search.match(/id=([0-9]+)/);
      if (id === null) {
        continue;
      }
      if (ids.includes(id[1])) {
        icon.style.opacity = "20%";
        const childImage = document.createElement("img");
        childImage.src = "https://i.imgur.com/DkIC6Gd.png";
        childImage.style.position = "absolute";
        icon.parentElement.prepend(childImage);
      }
    }
  });
};
