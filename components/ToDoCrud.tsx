"use client";

import React, { useEffect, useState } from "react";
import todoApi from "@/app/api/todoApi";
import { Todo } from "@/types/type";

const TodoCrud = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [title, setTitle] = useState<string>("");
  const [formCreate, setFormCreate] = useState<boolean>(true);
  const [changeFlag, setChangeFlag] = useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const fetchTodos = async () => {
    try {
      const todos = await todoApi.getTodos();
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [changeFlag]);

  const addTodo = async () => {
    try {
      await todoApi.createTodo({ title });
      setTitle("");
      setChangeFlag(!changeFlag);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (id: string) => {
    try {
      await todoApi.deleteTodo(id);
      setChangeFlag(!changeFlag);
    } catch (error) {
      console.log(error);
    }
  };
  const setUpdate = (todo: Todo) => {
    setFormCreate(false);
    setEditId(todo._id);
    setTitle(todo.title);
  };
  const updateTodo = async () => {
    try {
      await todoApi.updateTodo({_id: editId, title});
      setChangeFlag(!changeFlag);
      setFormCreate(true);
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Test Page</h1>
      <p>This is a test page</p>
      <div>
        <h2>Crud Operations</h2>
        <div>
          <h3>{formCreate ? "Create" : "Update"}</h3>
          <p>{formCreate ? "Create a new todo" : "Update a todo"}</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="bg-transparent"
            placeholder="Enter a title"
          />
          <button onClick={formCreate ? addTodo : updateTodo}>
            {formCreate ? "Create" : "Update"}
          </button>
        </div>
        <div>
          <h3>TodoList</h3>
          <p>List all the todos</p>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>{index + 1}</div>
                <div>{todo.title}</div>
                <div>
                  <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                  <button onClick={() => setUpdate(todo)}>Update</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoCrud;
