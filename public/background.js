// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(async() => {
//   let [tab] = await chrome.tabs.query({
//     active: true,
//     currentWindow: true,
//   });
//   chrome.storage.sync.set({ 'url': tab.url });
//   console.log('Default background color set to', tab.url);
// });

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ fixation: "1" });
  chrome.storage.local.set({ saccade: "10" });
});

let contextMenuConvertSelection = {
  id: "1",
  title: "Bionic Reading convert text '%s'",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuConvertSelection);

chrome.contextMenus.onClicked.addListener(async function (info) {
  var selectedText = info.selectionText;
  chrome.storage.local.set({ content: selectedText });
  let tab = await chrome.tabs.create({
    url: '../src/html/response.html',
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['./bionic-reading-api.js'],
  });
});