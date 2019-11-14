import childListObserver from "./lib/childListObserver";
const cache = [];

const mutateIcon = () => {
  childListObserver(".ocean-ui-plugin-mention-ac-item-icon", icons => {
    for (const icon of icons) {
      const parser = new URL(icon.getAttribute("src"));
      console.log(parser.search.match(/id=([0-9]+)/)[1]); // TODO: 写真がないと死ぬ
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
      for (let index = 0; index < response.users.length; index++) {
        const { id } = response.users[index];
        cache.push(id);
      }
      mutateIcon();
    });
  }
  // 最終更新からN時間経過していないときはキャッシュから取得
  else {
    // TODO キャッシュからデータを取得する処理を実装

    mutateIcon();
  }
});
