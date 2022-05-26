import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import { useEffect } from "react";

function Tab() {
  const [status, setStatus] = useState();

  useEffect(() => {
    let content = chrome.storage.sync.get(content, function (data) {
      const encodedParams = new URLSearchParams();
      encodedParams.append("content", data.content);
      encodedParams.append("response_type", "html");
      encodedParams.append("request_type", "html");
      encodedParams.append("fixation", "1");
      encodedParams.append("saccade", "10");

      const options = {
        method: "POST",
        url: "https://bionic-reading1.p.rapidapi.com/convert",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "e32d045684msh0b8d00134bd72ebp17da40jsnf1a1f1eeb777",
        },
        data: encodedParams,
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setStatus(response.data);
        })
        .catch(function (error) {
          // console.error(error);
          setStatus(error.response.data.message);
        });
    });
  }, []);

  // return <div>{status}</div>;
  // return <div dangerouslySetInnerHTML={{ __html: status }} />;
}

render(<Tab />, document.getElementById("response-tab"));
