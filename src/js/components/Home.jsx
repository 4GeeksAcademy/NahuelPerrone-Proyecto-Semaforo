import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first componen

function Home() {
const  {clickColor, setClickColor} = React.useState("red");

	return (
		<div className="container rounded-5 d-flex justify-content-center bg-black w-25">
  		<div className="row row-cols-2 m-4 d-flex flex-column align-items-center">
   		 <div 
		 onClick={() => setClickColor("danger")}
		 className={"col bg-danger m-1 rounded-circle  p-5 m-3" + 
		 (clickColor ===	"danger" ? "flash" : " " )}> </div>
   		 <div 
		 onClick={() => setClickColor("warning")}
		 className={"col bg-warning m-1 rounded-circle  p-5 m-3" +
		(clickColor ===	"warning" ? "flash" : " " )}></div>
   		 <div 
		 onClick={() => setClickColor("success")}
		 className={"col bg-success m-1 rounded-circle  p-5 m-3" + 
		 (clickColor ===	"success" ? "flash" : " " )}> </div>
		</div>
		</div>
	);
};
export default Home;