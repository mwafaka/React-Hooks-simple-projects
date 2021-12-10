import React from "react";
import ReactDOM from "react-dom";

const Alert = () => {
  const colorClasses = {
    color: "red",
	text4Red:"OMG! Something really bad has happended!",
	text4Orange:"Well, it is not that bad after all!"
  };
  //your component here
 return(
  <div className={colorClasses.color === "red"
  ? "alert alert-danger"
  : "alert alert-warning"} >
  {colorClasses.color==='green'?colorClasses.text4Red:colorClasses.text4Orange }
</div>
 )
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
  <Alert/>,
  document.getElementById("root")
);
