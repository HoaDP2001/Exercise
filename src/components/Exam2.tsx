import React, { useState } from "react";

export const Exam2 = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Go to work", isEdit: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddJob = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, task: newTodo, isEdit: false },
    ]);
    setNewTodo("");
  };

  const handleDeleteJob = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditJob = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isEdit: !todo.isEdit } : todo
      )
    );
  };

  const handeSaveJob = (id: number, newTodo: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTodo } : todo))
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10">Todo List</h1>
      <div className="mb-10">
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your job here"
          type="text"
        />
        <button className="border bg-slate-400" onClick={() => handleAddJob()}>
          Add Job
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.isEdit ? (
                <>
                  <input
                    type="text"
                    value={todo.task}
                    onChange={(e) => handeSaveJob(todo.id, e.target.value)}
                  />
                  <button
                    className="bg-green-100"
                    onClick={() => handeSaveJob(todo.id, todo.task)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-100"
                    onClick={() => handleDeleteJob(todo.id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  {todo.task}
                  <button
                    className="bg-green-100"
                    onClick={() => handleEditJob(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-100"
                    onClick={() => handleDeleteJob(todo.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
