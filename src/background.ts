import api from "./lib/api";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 最終更新からN時間経過したかで再取得の要否を確認
  chrome.storage.local.get(["saved_time"], function(saved_time) {
    console.log(saved_time);

    // if (Date.now() - Number(saved_time) > 60*60*1000) {
    if (
      Object.keys(saved_time).length === 0 ||
      Date.now() - Number(saved_time) > 5 * 1000
    ) {
      console.log("!");

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
    }
  });
});
