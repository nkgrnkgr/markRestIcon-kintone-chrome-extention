chrome.runtime.sendMessage("api", response => {
  console.log(response);
});

document.getElementsByClassName("aa");
const a: NodeListOf<HTMLLIElement> = document.querySelectorAll(
  ".ocean-ui-plugin-mention-ac-item-icon"
);

a.forEach(item => {
  item.style.opacity = "0";
});
// a.forEach(item => item.style.)
