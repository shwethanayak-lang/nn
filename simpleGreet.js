import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
