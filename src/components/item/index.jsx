import React from "react";
import "./style.css";

const index = (props) => {
    
  
  return (
    <li>
      <label>
        <input onClick={() => props.checkedType(props.id)} type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <p >
        {props.title}
      </p>
      <div className="icon">
        <i
          className="fa-solid fa-xmark"
          onClick={() => props.handleDelete(props.id)}
        ></i>
      </div>
    </li>
  );
};

export default index;
