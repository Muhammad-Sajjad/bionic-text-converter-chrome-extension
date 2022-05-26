import React from "react";
import { render } from "react-dom";

function Popup() {
  return (
    <button
      id="button"
      onClick={async () => {
        let [tab] = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });
        let a = chrome.scripting.executeScript({
          target: { tabId: tab.id, allFrames: true },
          files: ["./convert.js"],
        });
        // let taba = await chrome.tabs.create({
        //   url: "./tab.html",
        // });
      }}
    >
      Convert This Page Into Bionic Text
    </button>
  );
}

render(<Popup />, document.getElementById("App"));
