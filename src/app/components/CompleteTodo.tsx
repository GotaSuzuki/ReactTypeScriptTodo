"use client";

import React, { useState } from "react";
import { TodoType } from "../types/Todo";

type completeProps = {
  incompleteTodo: TodoType[];
  completeTodo: TodoType[];
  setIncompleteTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setCompleteTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const CompleteTodo = ({
  incompleteTodo,
  setIncompleteTodo,
  completeTodo,
  setCompleteTodo
}: completeProps) => {
  const handleBack = (id: string, index: number) => {
    const newCompleteTodo = completeTodo.filter((todo) => todo.id !== id);
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setCompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  };

  const handleDelete = (id: string) => {
    const newCompleteTodo = completeTodo.filter((todo) => todo.id !== id);
    setCompleteTodo(newCompleteTodo);
  };

  return (
    <div className="w-2/4 justify-center text-center">
      <p className="title">未完了のTODO</p>
      {completeTodo.map((todo, index) => (
        <ul key={todo.id} className="flex justify-center text-center">
          <div className="flex justify-center text-center p-2 w-80 mt-3 border-2 rounded-xl">
            <li className="mx-10">{todo.todo}</li>
            <button
              onClick={() => handleBack(todo.id, index)}
              className="mx-3 text-green-600">
              Back
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

export default CompleteTodo;
