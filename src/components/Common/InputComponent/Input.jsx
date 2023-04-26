import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <div>
      <div className="row" >
        <span>
          <input
            className="gate"
            style={props.style}
            type={props.type}
            placeholder={props.placeholder}
          />
          <label for="class">{props.title}</label>
        </span>
      </div>
    </div>
  );
};

export default Input;
