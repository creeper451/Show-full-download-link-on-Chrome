chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url === 'chrome://downloads/' && changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['content.js']
    });
  }
});
