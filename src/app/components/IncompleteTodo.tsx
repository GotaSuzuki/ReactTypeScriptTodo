"use client";

import { todo } from "node:test";
import React, { useState } from "react";
import { TodoType } from "../types/Todo";
import CompleteTodo from "./CompleteTodo";

type incompleteProps = {
  incompleteTodo: TodoType[];
  setIncompleteTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completeTodo: TodoType[];
  setCompleteTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const IncompleteTodo = ({
  incompleteTodo,
  setIncompleteTodo,
  completeTodo,
  setCompleteTodo
}: incompleteProps) => {
  const handleToComplete = (id: string, index: number) => {
    const newIncompleteTodo = incompleteTodo.filter((todo) => todo.id !== id);
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncompleteTodo);
    setCompleteTodo(newCompleteTodo);
  };

  const handleDelete = (id: string) => {
    const newIncompleteTodo = incompleteTodo.filter((todo) => todo.id !== id);
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <div className="justify-center text-center w-2/4">
      <p className="">未完了のTODO</p>
      {incompleteTodo.map((todo, index) => (
        <ul key={todo.id} className="flex justify-center text-center">
          <div className="flex justify-center text-center p-2 w-80 mt-3 border-2 rounded-xl">
            <li className="mx-10">{todo.todo}</li>
            <button
              onClick={() => handleToComplete(todo.id, index)}
              className="mx-3 text-blue-600">
              complete
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-600">
              delete
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default IncompleteTodo;
