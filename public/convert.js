function main() {
  // let tags = ["body"];

  // const parser = new DOMParser();

  // console.log("Before ", window.location.href);
  // chrome.storage.sync.set({ content: window.location.href });
  // tags.forEach((tag) => {
  // for (let element of document.getElementsByTagName(tag)) {
  // const n = parser.parseFromString(element.innerHTML, "text/html");
  // console.log("Before ", element.innerHTML);
  // chrome.storage.local.set({'content': element.innerHTML});
  // return n;
  // }
  // });

  const encodedParams = new URLSearchParams();
  encodedParams.append("content", window.location.href);
  encodedParams.append("response_type", "html");
  encodedParams.append("request_type", "html");
  encodedParams.append("fixation", "1");
  encodedParams.append("saccade", "10");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
      "X-RapidAPI-Key": "5fda81fbc4msh811c827b2f01f9dp18d02cjsn10b0ea83f33f",
    },
    body: encodedParams,
  };

  fetch("https://bionic-reading1.p.rapidapi.com/convert", options)
    .then((response) => response.text())
    .then((response) => {
      for (let element of document.getElementsByTagName("html")) {
        element.innerHTML = response;
      }
    })
    .catch((err) => console.error(err));
}

main();
