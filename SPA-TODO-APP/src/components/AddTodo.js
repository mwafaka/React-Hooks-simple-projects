import React, { useState } from "react";

export default function AddTodo (props) {
  const[state,setState]=useState({
    title: ""
  }
)

  const onSubmit = e => {
    e.preventDefault();
  props.addTodo(state.title);
    setState({ title: "" });
  };

  const  onChange = e => setState({ [e.target.name]: e.target.value });
    return (
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add to do ..."
          value={state.title}
          onChange={onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  
}


