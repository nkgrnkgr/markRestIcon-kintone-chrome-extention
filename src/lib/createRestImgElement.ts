import { ICON_URL_DATA } from "./IconConstants";

const stylePatchObj = {
  position: "absolute",
  width: "100%",
  height: "100%"
};

const patchStyle = element => {
  Object.assign(element.style, stylePatchObj);
};

export default () => {
  const childImage = document.createElement("img");
  childImage.src = ICON_URL_DATA.url;
  patchStyle(childImage);
  return childImage;
};
