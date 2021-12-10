import React from "react";
import ReactDOM from "react-dom";


const Alert = (props) => {
	return (

		<div>
<div className={props.color==="red"?"alert-primary":props.color==="green"? "alert-danger": "alert-warning"}
 role="alert">
			{props.text}
		</div>
		</div>
	)};
	
ReactDOM.render(
	
	<div>
		<div>Lukas</div>
		<div></div>
		<div></div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.getElementById("root")
);

