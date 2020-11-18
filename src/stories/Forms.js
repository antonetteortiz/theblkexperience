import React from "react";
import "./forms.css";


const Forms = (props) => {
  // let classList = "p-textinput";
  // let label = "";
  // if (props.label !== undefined && props.label.trim !== "") {
  //   label = props.label;
  // }
  // let labelHtml = "";
  // if (label !== undefined && label.trim() !== "") {
  //   labelHtml = <span>{label}</span>;
  // }
  // let placeholder = label;
  // if (props.placeholder !== undefined && props.placeholder.trim() !== "") {
  //   placeholder = props.placeholder.trim();
  // }
  // if (props.size !== undefined && props.size.trim() !== "") {
  //   let size = props.size.trim().toLowerCase();
  //   classList += ` textinput-${size}`;
  // }
  return (
    <div >
      {/* {labelHtml} */}
      <input className="textinput" type="text" placeholder={"Email Here"} />
    </div>
  );
};
export default Forms;
