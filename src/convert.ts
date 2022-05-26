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
