import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first componen

function Home() {
const [clickRojo, setClickRojo] = React.useState("none");
const [clickAmarillo, setClickAmarillo] = React.useState("yellow");
const [clickVerde, setClickVerde] = React.useState("green");
// The state variable 'clickColor' is used to track the current color of the traffic light.
  function cambiarColor () {
		if (clickRojo == "none") {
			setClickRojo ("0px 0px 12px 10px rgb(253, 251, 251)" ),
			setClickAmarillo("none"),
			setClickVerde("none");
		} else {setClickRojo("none")

		};
	};
 function cambiarColo () {
		 if (clickAmarillo == "none") {
			setClickAmarillo ("0px 0px 12px 10px rgb(253, 251, 251)" ),
			setClickVerde("none"),
			setClickRojo("none");
		} else {setClickAmarillo("none")

		};
	};
 function cambiarCol () {
		if (clickVerde == "none") {
			setClickVerde ("0px 0px 12px 10px rgb(253, 251, 251)" ),
			setClickRojo("none"),
			setClickAmarillo("none");
		} else {setClickVerde("none")

		};
		
  };


	return (
		<div className="container rounded-5 d-flex justify-content-center bg-black w-25 mt-5">
  		<div className="row row-cols-2 m-4 d-flex flex-column align-items-center">
   		 <button 
		 className={"col m-1 rounded-circle border border-0 p-5 m-3"} onClick={cambiarColor} style={{ backgroundColor: "red", boxShadow: clickRojo}}></button>
   		 <button 
		 className={"col m-1 rounded-circle border border-0 p-5 m-3"} onClick={cambiarColo} style={{ backgroundColor:"yellow", boxShadow: clickAmarillo }}> </button>
   		 <button
		 className={"col m-1 rounded-circle border border-0 p-5 m-3"}onClick={cambiarCol} style={{ backgroundColor:"green", boxShadow: clickVerde }}> </button>
		</div>
		</div>
	);
};
export default Home;