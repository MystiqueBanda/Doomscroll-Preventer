// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("instagram.com") && changeInfo.status === "complete") {
      console.log("Instagram tab opened:", tab.url);
      // Optional: Do something when Instagram is opened
      // You could even redirect or close tab, but your content.js already handles it well
    }
  });
  