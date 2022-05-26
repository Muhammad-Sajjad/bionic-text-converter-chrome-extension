let fixation = "1";
let saccade = "10";
let apiKey = "5fda81fbc4msh811c827b2f01f9dp18d02cjsn10b0ea83f33f"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ fixation: "1" });
  chrome.storage.local.set({ saccade: "10" });
  chrome.storage.local.set({ apiKey: "5fda81fbc4msh811c827b2f01f9dp18d02cjsn10b0ea83f33f" });
});