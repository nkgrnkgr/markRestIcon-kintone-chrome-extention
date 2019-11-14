type Callback = (icons: Array<HTMLElement>) => void;
export default (selectors: string, callback: Callback) => {
  const observer = new MutationObserver(records => {
    for (const record of records) {
      for (const node of Array.from(record.addedNodes)) {
        const _node = node as HTMLElement;
        if (_node.querySelectorAll) {
          const childList: ArrayLike<HTMLElement> = _node.querySelectorAll(
            selectors
          );
          callback(childList as HTMLElement[]);
        }
      }
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};
