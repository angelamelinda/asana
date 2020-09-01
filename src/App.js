import React from "react";
import "./App.css";
import axios from "axios";

function App() {
  const handleOnClick = () => {
    const data = {
      submissionUrl:
        "https://form.asana.com/?hash=e4b5f50ace6daa4e20d5134684d0da6941d743f818cf64368e54793360518fb4&id=1191397785293993",
      fieldValues: {
        1191397785293994: "Jubaedahsss",
        1191608748892795: "Tidak Ada",
        1191608748892797: "1191608748892802",
        1191608748892796: "adsdadasada",
        1191608748892804: "1191608748892805",
      },
      attachments: {},
    };

    const url =
      "https://app.asana.com/-/submitForm?id=1191397785293993&hash=dace4ba3085e7b3882ddabb15f83cb863dc6848cccd98d55b1b7821b0e30aa1b";

    axios
      .post(url, data)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={handleOnClick}>send</button>
    </div>
  );
}

export default App;
