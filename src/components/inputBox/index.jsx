import React from 'react'
import './style.css'

const index = (props) => {
  return (
    <div className="input-box">
      <input
        value={props.value}
        onChange={props.handleChange}
        type="text"
        placeholder="Add to do"
        maxLength={30}
      />
      <button
        className={props.value === '' ? "isDisable" : ""}
        disabled={props.value ? false : true}
        onClick={props.handleAdd}
      >
        add to do
      </button>
    </div>
  );
}

export default index