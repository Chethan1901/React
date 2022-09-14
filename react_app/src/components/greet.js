import React from "react";

// function greet(){
//     return <h1> hello chethan </h1>
// }

export const greet = (props) => {
	console.log(props);
	return (
    <div><h1>hello {props.name} is a {props.type}</h1>
    {props.children}
    </div>
    )
};
export default greet;
