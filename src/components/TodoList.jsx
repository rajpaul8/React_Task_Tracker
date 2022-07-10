import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ itemList, deleteItemHandle }) {
  return (
    <>
      <div className="container">
        {itemList.length === 0 || itemList === null ? (
          <h3>No Task Scheduled ToDo</h3>
        ) : (
          itemList.map((item, id) => {
            return (
              <>
                <div className="centerCardItems">
                  <TodoItem
                    todoItem={item}
                    key={item.id}
                    deleteItemHandle={deleteItemHandle}
                  ></TodoItem>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
}

export default TodoList;
