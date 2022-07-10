import React from "react";
import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text || !priority) {
      alert(`Description or Priority cannot be blank`);
    } else {
      addTask(text, priority);
      setText("");
      setPriority("");
    }
  };
  return (
    <>
      <div className="container">
        <h3 className="ml-5">Add a Task </h3>
        <form className="container mt-5" onSubmit={submit}>
          <div className="form-row mt-5">
            <div className="form-group col-md-6 ">
              <label htmlFor="inputDescription">Task Title</label>
              <input
                className="form-control"
                id="text"
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Task Description"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="priority">Priority</label>
                <input
                  type="number"
                  className="form-control"
                  id="priority"
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                  placeholder="Priority"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <button type="submit" className="btn btn-success">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTask;
