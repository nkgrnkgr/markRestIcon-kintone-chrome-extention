import childListObserver from "./childListObserver";

export default (ids: string[]) => {
  childListObserver(".ocean-ui-comments-commentbase-usericon", icons => {
    for (const icon of icons) {
      const id = icon.style.backgroundImage.match(/id=([0-9]+)/);
      if (id === null) {
        continue;
      }
      if (ids.includes(id[1])) {
        icon.style.opacity = "20%";
      }
    }
  });
};