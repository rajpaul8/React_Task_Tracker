import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let initTodoList;
  if (localStorage.getItem("todoList") === null) {
    initTodoList = [];
  } else {
    initTodoList = JSON.parse(localStorage.getItem("todoList"));
  }

  const deleteItemHandle = (todoItem) => {
    setTodoList(
      todoList.filter((e) => {
        return e !== todoItem;
      })
    );
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };
  const addTask = (text, priority) => {
    let id;
    if (todoList.length === 0) {
      id = 0;
    } else {
      id = todoList[todoList.length - 1].id + 1;
    }
    const newTask = {
      id: id,
      text: text,
      priority: priority,
    };
    setTodoList([...todoList, newTask]);
  };
  const [todoList, setTodoList] = useState(initTodoList);
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddTask addTask={addTask}></AddTask>
              <TodoList
                itemList={todoList}
                deleteItemHandle={deleteItemHandle}
              ></TodoList>
            </>
          }
        ></Route>
        <Route exact path="/about" element={<About></About>}></Route>
      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
