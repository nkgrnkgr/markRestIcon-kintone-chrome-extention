import childListObserver from "./childListObserver";
import { ICON_URL_DATA } from "./IconConstants";
import createRestImgElement from "./createRestImgElement";
export default () => {
  childListObserver(".ocean-ui-plugin-mention-ac-item-icon", icons => {
    chrome.storage.local.get("day_off_user_ids", obj => {
      const ids = obj.day_off_user_ids;
      if (ids === undefined || ids.length === 0) {
        return;
      }
      for (const icon of icons) {
        const parser = new URL(icon.getAttribute("src"));
        const id = parser.search.match(/id=([0-9]+)/);
        if (id === null) {
          continue;
        }
        if (ids.includes(id[1])) {
          icon.style.opacity = ICON_URL_DATA.opacityValue;
          icon.parentElement.prepend(createRestImgElement());
        }
      }
    });
  });
};
