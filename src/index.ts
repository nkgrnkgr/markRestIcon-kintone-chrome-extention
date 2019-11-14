import mutateMentionIcon from "./lib/mutateMentionIcon";
import mutateThreadCommentsIcon from "./lib/mutateThreadCommentsIcon";
const cache = [];

const mutateIcon = (ids: string[]) => {
  mutateMentionIcon(ids);
  mutateThreadCommentsIcon(ids);
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
    });
  }
});

mutateIcon(cache);
