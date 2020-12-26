
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   simpleGreet.js >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


import React from "react";
import ReactDOM from "react-dom";
import "./simpleGreet.css";

let curDate = new Date(2020, 12, 26, 16);
let greet = "";
curDate = curDate.getHours();
const cssStyle = {};

if (curDate >= 3 && curDate < 12) {
  greet = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate <= 18) {
  greet = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greet = "Good Night";
  cssStyle.color = "blue";
}

class Greet extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1>
            Hello Guys... <span style={cssStyle}>{greet} </span>
          </h1>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Greet />, document.getElementById("root"));





<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<simpleGreet.css >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: powderblue;
  text-align: center;
  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

div {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  background-color: peachpuff;
  border-radius: 1em;
  padding: 20px 20px;
}
  
