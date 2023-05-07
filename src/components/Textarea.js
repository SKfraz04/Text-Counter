import React from "react";
import { useState } from "react";

export function TextForm() {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("Uppercase was Clicked" + text);
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("Lowercase was Clicked" + text);
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpaces = () => {
    console.log("removed extra spaces" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container-fluid ">
        <div className="container">

        <div className="textareabox">
          <div className="mb-3">
            <h1>Write your text here.</h1>
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              placeholder="Write Here..."
              id="myBox"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div
            className="btn btn-primary"
          
            onClick={handleUpClick}
          >
            {" "}
            convert to UPPER CASE
          </div>
          <div disable={text.length===0}
            className="btn btn-primary mx-3"
          
            onClick={handleLoClick}
          >
            {" "}
            convert to lowercase
          </div>
          <div
            className="btn btn-primary mx-3"
          
            onClick={handleClearClick}
          >
            {" "}
            Clear text
          </div>
          <div
            className="btn btn-primary mx-3"
          
            onClick={handleExtraSpaces}
          >
            {" "}
            Remove Extra Spaces
          </div>
        </div>
      </div>
      <div className="container">
        <h2>Your text summery</h2>
        <p>
          {" "}
          {text.split(" ").filter((element)=> {return element.length!==0}).length}words & {text.length} characters{" "}
        </p>
        <p>{0.012 * text.split(" ").length} Minutes to read</p>
        <h2>Priview</h2>
        <p>{text}</p>
        </div>
      </div>
    </>
  );
}
