import React from "react";
import "./Form.css";
const Forms = (props) => {
  let classList = "p-textinput";
  let label = "";
  if (props.label !== undefined && props.label.trim !== "") {
    label = props.label;
  }
  let labelHtml = "";
  if (label !== undefined && label.trim() !== "") {
    labelHtml = <span>{label}</span>;
  }
  let placeholder = label;
  if (props.placeholder !== undefined && props.placeholder.trim() !== "") {
    placeholder = props.placeholder.trim();
  }
  if (props.size !== undefined && props.size.trim() !== "") {
    let size = props.size.trim().toLowerCase();
    classList += ` textinput-${size}`;
  }
  return (
    <div className={classList}>
      {labelHtml}
      <input className="textinput" type="text" placeholder={placeholder} />
    </div>
  );
};
export default Forms;
