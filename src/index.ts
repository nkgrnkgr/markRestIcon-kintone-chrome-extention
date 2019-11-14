import childListObserver from "./lib/childListObserver";

const mutateIcon = () => {
  childListObserver(".ocean-ui-plugin-mention-ac-item-icon", icons => {
    for (const icon of icons) {
      icon.style.opacity = "50%";
    }
  });
};

chrome.storage.local.get(["saved_time"], function(obj) {
  // 最終更新からN時間経過したかで再取得の要否を確認
  const saved_time = obj.saved_time;
  if (saved_time === undefined || Date.now() - Number(saved_time) > 5 * 1000) {
    // APIの実行
    chrome.runtime.sendMessage("api", response => {
      console.log(response);
      mutateIcon();
    });
  }
  // 最終更新からN時間経過していないときはキャッシュから取得
  else {
    // TODO キャッシュからデータを取得する処理を実装

    mutateIcon();
  }
});
