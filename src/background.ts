import api from "./lib/api";
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case "api":
      api().then(json => {
        sendResponse(json);
        chrome.storage.local.set({ saved_time: Date.now() });
      });
      return true;
    default:
      return false;
  }
});
