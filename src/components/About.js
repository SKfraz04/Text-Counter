import React from "react";
import { Accordion, Button } from "react-bootstrap";
import { useState } from "react";







export default function About() {
  const [myStyle, setMyStyle] = useState({
    color:'white',
    backgroundColor:'black'
  });
const [btntext, setBtnText] = useState("Enable Light mode")
const toggleStyle = ()=>{
  
  if(myStyle.color === 'white'){
    setMyStyle({
      color:"black",
      backgroundColor:"white"
    })
    setBtnText( "Enable Dark mode")
  }
  else{
     setMyStyle({
    color:"white",
    backgroundColor:"black"
  })
  setBtnText("Enable Light mode");
}
}
  return (
    <div className="container-fluid aboutus" style={myStyle}>
      <div className="container">
        <h1 className="text-center" style={myStyle}>
          About us.
        </h1>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About us</Accordion.Header>
            <Accordion.Body className="accordion-contant" style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>More info</Accordion.Header>
            <Accordion.Body className="accordion-contant" style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="container my-4">
          <Button onClick={toggleStyle} className="acc2" style={myStyle}>
            {btntext}
          </Button>
        </div>
      </div>
    </div>
  );
}
