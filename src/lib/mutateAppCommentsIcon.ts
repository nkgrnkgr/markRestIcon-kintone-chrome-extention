import childListObserver from "./childListObserver";
import { ICON_URL_DATA } from "./IconConstants";

const iconWrapeerClassName = ".itemlist-userImage-gaia";

const mutateIcons = (wrappers, ids) => {
  for (const wrapper of wrappers) {
    const icon = wrapper.querySelector("img");
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
};

export default () => {
  const wrappers = document.querySelectorAll(iconWrapeerClassName);
  chrome.storage.local.get("day_off_user_ids", obj => {
    const ids = obj.day_off_user_ids;
    if (ids === undefined || ids.length === 0) {
      return;
    }
    mutateIcons(wrappers, ids);
    childListObserver(iconWrapeerClassName, wrappers => {
      mutateIcons(wrappers, ids);
    });
  });
};
