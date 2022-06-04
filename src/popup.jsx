import React from "react";
import { render } from "react-dom";

function Popup() {
  return (
    <div>
      <div>
        <label htmlFor="apiKey">
          <a
            href="https://rapidapi.com/bionic-reading-bionic-reading-default/api/bionic-reading1/"
            target="_blank"
          >
            Bionic-Reading
          </a>{" "}
          APIKey:
        </label>
        <input
          type="text"
          name="apiKey"
          id="apiKey"
          onChange={async (e) => {
            chrome.storage.local.set({ apiKey: e.target.value.toString() });
          }}
        />
      </div>
      <div className="range-container">
        <label htmlFor="fixation">Fixation (1 - 5): </label>
        <input
          type="range"
          name="fixation"
          id="fixation"
          min="1"
          max="5"
          defaultValue="1"
          list="tickmarks"
          onChange={async (e) => {
            chrome.storage.local.set({ fixation: e.target.value.toString() });
          }}
        />
        <div className="range-labels">
          <label htmlFor="fixation">1</label>
          <label htmlFor="fixation">2</label>
          <label htmlFor="fixation">3</label>
          <label htmlFor="fixation">4</label>
          <label htmlFor="fixation">5</label>
        </div>
      </div>
      <div className="range-container">
        <label htmlFor="saccade">Saccade (1 - 10): </label>
        <input
          type="range"
          name="saccade"
          id="saccade"
          min="1"
          max="10"
          defaultValue="10"
          list="tickmarks"
          onChange={async (e) => {
            chrome.storage.local.set({ saccade: e.target.value.toString() });
          }}
        />
        <div className="range-labels">
          <label htmlFor="fixation">1</label>
          <label htmlFor="fixation">2</label>
          <label htmlFor="fixation">3</label>
          <label htmlFor="fixation">4</label>
          <label htmlFor="fixation">5</label>
          <label htmlFor="fixation">6</label>
          <label htmlFor="fixation">7</label>
          <label htmlFor="fixation">8</label>
          <label htmlFor="fixation">9</label>
          <label htmlFor="fixation">10</label>
        </div>
      </div>
      <button
        id="button"
        onClick={async () => {
          let [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });
          chrome.scripting.executeScript({
            target: { tabId: tab.id, allFrames: true },
            files: ["./convert.js"],
          });
        }}
      >
        Convert This Page Into Bionic Text
      </button>
    </div>
  );
}

render(<Popup />, document.getElementById("App"));
