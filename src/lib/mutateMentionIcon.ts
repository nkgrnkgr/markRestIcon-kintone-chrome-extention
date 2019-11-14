import childListObserver from "./childListObserver";
import { ICON_URL_DATA } from "./IconConstants";
export default (ids: string[]) => {
  childListObserver(".ocean-ui-plugin-mention-ac-item-icon", icons => {
    for (const icon of icons) {
      const parser = new URL(icon.getAttribute("src"));
      const id = parser.search.match(/id=([0-9]+)/);
      if (id === null) {
        continue;
      }
      if (ids.includes(id[1])) {
        icon.style.opacity = ICON_URL_DATA.opacityValue;
        const childImage = document.createElement("img");
        childImage.src = ICON_URL_DATA.url;
        childImage.style.position = "absolute";
        icon.parentElement.prepend(childImage);
      }
    }
  });
};
