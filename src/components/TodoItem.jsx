import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todoItem, deleteItemHandle }) {
  return (
    <>
      <div className="card-container">
        <div className="text">
          <p>
            {todoItem.text} | {todoItem.priority}
          </p>
          <Button fullWidth
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => deleteItemHandle(todoItem)}
          >
            Completed
          </Button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
