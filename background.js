
const urlIndex = 0;
const urls = [
    'https://invidious.fdn.fr/watch?v=',
    'https://yewtu.be/watch?v='
]

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "A",
      title: "Open Ad Free",
      contexts: ["link"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "A") {
        const originalUrl = info.linkUrl;
        const videoId = originalUrl.split('=')[1];
        const url = `${urls[urlIndex]}${videoId}`
        console.log(url)
        chrome.tabs.create({url});
    }
});
  
chrome.action.onClicked.addListener(function(tab) {
    const videoId = tab.url.split('=')[1];
    const url = `${urls[urlIndex]}${videoId}`
    chrome.tabs.create({url});
});