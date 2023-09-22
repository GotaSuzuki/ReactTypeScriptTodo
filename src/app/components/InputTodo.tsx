import React, { useRef, useState } from "react";
import { TodoType } from "../types/Todo";
import { v4 as uuidv4 } from "uuid";

type incompleteProps = {
  incompleteTodo: TodoType[];
  setIncompleteTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const InputTodo = ({ incompleteTodo, setIncompleteTodo }: incompleteProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current || ref.current.value === "") return;
    const newTodo = {
      id: uuidv4(),
      todo: ref.current.value
    };
    setIncompleteTodo([...incompleteTodo, newTodo]);
    ref.current.value = "";
  };

  return (
    <div className="my-10">
      <div className="flex justify-center">
        <form onSubmit={(e) => handleAdd(e)}>
          <input placeholder="TODOを入力" className="border" ref={ref} />
          <button className="border mx-2 bg-blue-200">追加</button>
        </form>
      </div>
    </div>
  );
};

export default InputTodo;
