import { ApiError, Client, ConvertController } from 'bionic-reading-apilib';

async function main() {
  let api = await chrome.storage.local.get("apiKey");
  let fix = await chrome.storage.local.get("fixation");
  let sac = await chrome.storage.local.get("saccade");

  const client = new Client({
    timeout: 0,
  })
  const convertController = new ConvertController(client);
  const contentType = null;
  const useQueryString = false;
  const xRapidapiHost = 'bionic-reading1.p.rapidapi.com';
  const xRapidapiKey = api.apiKey;
  const xRapidapiUa = 'RapidAPI-Playground';
  const content = window.location.href;
  const responseType = 'html';
  const requestType = 'html';
  const fixation = fix.fixation;
  const saccade = sac.saccade;
  try {
    const { result, ...httpResponse } = await convertController.convert(useQueryString, xRapidapiHost, xRapidapiKey, xRapidapiUa, content, responseType, requestType, fixation, saccade);
    for (let element of document.getElementsByTagName("html")) {
      const baseUrl = element.baseURI.split(":", 1).toString();
      if (baseUrl != "chrome-extension") element.innerHTML = result;
    }
    chrome.storage.local.set({
      apiKey: "5fda81fbc4msh811c827b2f01f9dp18d02cjsn10b0ea83f33f",
    });
  } catch (error) {
    chrome.storage.local.set({
      apiKey: "5fda81fbc4msh811c827b2f01f9dp18d02cjsn10b0ea83f33f",
    });
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}

main();
