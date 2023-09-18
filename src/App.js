import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { marked } from "marked";
import axios from "axios";
import Alert from "./Alert";
import "./Background";
import "./App.css";

//styling

let inputStyle = {
  width: "500px",
  height: "50vh",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
};

let outputStyle = {
  width: "500px",
  height: "50vh",
  backgroundColor: "#DCDCDC",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
  overflow: "scroll",
};

//app part

function App() {
  const [markDown, setMarkDown] = useState("");
  const [repoName, setRepoName] = useState("");
  const [alert, setAlert] = useState(null);
  const accessToken = process.env.REACT_APP_ACCESSTOKEN;
  const owner = process.env.REACT_APP_OWNER;

  const axiosConfig = {
    headers: {
      Authorization: `token ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  async function updateReadmeFile() {
    if (repoName === "") {
      showAlert("Please enter Repository Name", "primary");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repoName}/contents/README.md`,
        axiosConfig
      );
      const currentReadme = response.data;

      const updateData = {
        message: "Update README.md through MarkDown-Previewer",
        content: btoa(markDown), // Converting content to base64
        sha: currentReadme.sha,
      };

      await axios.put(
        `https://api.github.com/repos/${owner}/${repoName}/contents/README.md`,
        updateData,
        axiosConfig
      );

      console.log("README updated successfully.");
      showAlert("README updated successfully", "success");
    } catch (error) {
      console.error(
        "Error updating README:",
        error.response ? error.response.data : error.message
      );
      showAlert(error.message, "danger");
    }
  }

  return (
    <div className="App">
      <Alert alert={alert} />
      <div className="container">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" bg="dark">
                Markdown Previewer
              </Badge>
            </h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center" bg="secondary">
                  Input
                </Badge>
              </h4>
            </div>
            <div className="input" style={inputStyle}>
              <textarea
                className="input"
                style={inputStyle}
                value={markDown}
                onChange={(e) => setMarkDown(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="col text-center">
              <h4>
                <Badge className="text-align-center mb-2" bg="secondary">
                  Preview
                </Badge>
              </h4>
            </div>
            <div
              className="output"
              style={outputStyle}
              dangerouslySetInnerHTML={{ __html: marked(markDown) }}
            ></div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <button
              className="text-align-center btn btn-dark"
              onClick={updateReadmeFile}
            >
              Update README
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <label>Repository Name:</label>
            <input
              type="text"
              className="text-align-center"
              onChange={(e) => setRepoName(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
