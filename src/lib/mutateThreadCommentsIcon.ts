import childListObserver from "./childListObserver";
import { ICON_URL_DATA } from "./IconConstants";
import createRestImgElement from "./createRestImgElement";

export default () => {
  childListObserver(".ocean-ui-comments-commentbase-usericon", icons => {
    chrome.storage.local.get(["day_off_user_ids"], obj => {
      const ids = obj.day_off_user_ids;
      if (ids === undefined || ids.length === 0) {
        return;
      }
      for (const icon of icons) {
        const id = icon.style.backgroundImage.match(/id=([0-9]+)/);
        if (id === null) {
          continue;
        }
        if (ids.includes(id[1])) {
          icon.style.opacity = ICON_URL_DATA.opacityValue;
          icon.appendChild(
            createRestImgElement({
              position: "absolute",
              width: "100%",
              height: "100%"
            })
          );
        }
      }
    });
  });
};
