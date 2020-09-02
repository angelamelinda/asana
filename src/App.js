import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

function App({ location }) {
  const [token, setToken] = useState("");

  // const handleOnClick = () => {
  //   const data = {
  //     submissionUrl:
  //       "https://form.asana.com/?hash=e4b5f50ace6daa4e20d5134684d0da6941d743f818cf64368e54793360518fb4&id=1191397785293993",
  //     fieldValues: {
  //       1191397785293994: "Jubaedahsss",
  //       1191608748892795: "Tidak Ada",
  //       1191608748892797: "1191608748892802",
  //       1191608748892796: "adsdadasada",
  //       1191608748892804: "1191608748892805",
  //     },
  //     attachments: {},
  //   };

  //   const url =
  //     "https://app.asana.com/-/submitForm?id=1191397785293993&hash=dace4ba3085e7b3882ddabb15f83cb863dc6848cccd98d55b1b7821b0e30aa1b";

  //   axios
  //     .post(url, data)
  //     .then((resp) => console.log(resp))
  //     .catch((err) => console.log(err));
  // };

  const handleAuthentication = async () => {
    let params = queryString.parse(location.search);
    console.log(params.code);
    const url = `https://app.asana.com/-/oauth_token?grant_type=authorization_code&code=${params.code}&redirect_uri=https://asana-ixoghn1mq.vercel.app/&client_id=1191392742834152&client_secret=1b7e7a9c1473e5f4680401047a8e0c5e`;

    await axios
      .post(url, null, {
        headers: {
          mode: "no-cors",
        },
      })
      .then((resp) => {
        setToken(resp.access_token);
      })
      .catch((err) => {});
  };

  const handleSubmit = async () => {
    const data = {
      data: {
        html_notes:
          "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
        name: "Buy catnip 000",
        notes: "Mittens really likes the stuff from Humboldt.",
      },
    };

    const url = "https://app.asana.com/api/1.0/tasks?projects=1191387689813121";

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post(url, data, config).then(console.log).catch(console.log);
  };

  return (
    <div className="App">
      <a href="https://app.asana.com/-/oauth_authorize?response_type=code&client_id=1191392742834152&redirect_uri=https%3A%2F%2Fb9e95ae39546.ngrok.io%2F&state=<STATE_PARAM>">
        get code
      </a>
      <button onClick={handleAuthentication}>auth</button>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default withRouter(App);
