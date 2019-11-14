import { ICON_URL_DATA } from "./IconConstants";

export default style => {
  const img = document.createElement("img");
  img.src = ICON_URL_DATA.url;
  Object.assign(img.style, style);
  return img;
};
