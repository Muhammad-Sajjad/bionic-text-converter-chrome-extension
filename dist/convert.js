/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/convert.ts ***!
  \************************/
async function main() {
  let api = await chrome.storage.local.get("apiKey");
  let fix = await chrome.storage.local.get("fixation");
  let sac = await chrome.storage.local.get("saccade");

  const encodedParams = new URLSearchParams();
  encodedParams.append("content", window.location.href);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");
  encodedParams.append("fixation", fix.fixation);
  encodedParams.append("saccade", sac.saccade);

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
      "X-RapidAPI-Key": api.apiKey,
    },
    body: encodedParams,
  };

  fetch("https://bionic-reading1.p.rapidapi.com/convert", options)
    .then((response) => response.text())
    .then((response) => {
      for (let element of document.getElementsByTagName("html")) {
        if (
          element.baseURI !=
          "chrome-extension://jojbneihpmldhaikgeldboindmklnend/popup.html"
        )
          element.innerHTML = response;
      }
    })
    .catch((err) => console.error(err));
}

main();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jpb25pYy10ZXh0LWNvbnZlcnRlci8uL3NyYy9jb252ZXJ0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgbGV0IGFwaSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImFwaUtleVwiKTtcclxuICBsZXQgZml4ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZml4YXRpb25cIik7XHJcbiAgbGV0IHNhYyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInNhY2NhZGVcIik7XHJcblxyXG4gIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgZW5jb2RlZFBhcmFtcy5hcHBlbmQoXCJjb250ZW50XCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBlbmNvZGVkUGFyYW1zLmFwcGVuZChcInJlc3BvbnNlX3R5cGVcIiwgXCJodG1sXCIpO1xyXG4gIGVuY29kZWRQYXJhbXMuYXBwZW5kKFwicmVxdWVzdF90eXBlXCIsIFwiaHRtbFwiKTtcclxuICBlbmNvZGVkUGFyYW1zLmFwcGVuZChcImZpeGF0aW9uXCIsIGZpeC5maXhhdGlvbik7XHJcbiAgZW5jb2RlZFBhcmFtcy5hcHBlbmQoXCJzYWNjYWRlXCIsIHNhYy5zYWNjYWRlKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiYmlvbmljLXJlYWRpbmcxLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogYXBpLmFwaUtleSxcclxuICAgIH0sXHJcbiAgICBib2R5OiBlbmNvZGVkUGFyYW1zLFxyXG4gIH07XHJcblxyXG4gIGZldGNoKFwiaHR0cHM6Ly9iaW9uaWMtcmVhZGluZzEucC5yYXBpZGFwaS5jb20vY29udmVydFwiLCBvcHRpb25zKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIikpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBlbGVtZW50LmJhc2VVUkkgIT1cclxuICAgICAgICAgIFwiY2hyb21lLWV4dGVuc2lvbjovL2pvamJuZWlocG1sZGhhaWtnZWxkYm9pbmRta2xuZW5kL3BvcHVwLmh0bWxcIlxyXG4gICAgICAgIClcclxuICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxufVxyXG5cclxubWFpbigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=