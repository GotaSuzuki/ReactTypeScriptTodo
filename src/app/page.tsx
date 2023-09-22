"use client";

import { useState } from "react";
import CompleteTodo from "./components/CompleteTodo";
import IncompleteTodo from "./components/IncompleteTodo";
import InputTodo from "./components/InputTodo";
import { TodoType } from "./types/Todo";

export default function Home() {
  const [incompleteTodo, setIncompleteTodo] = useState<TodoType[]>([
    { id: "1", todo: "aaa" },
    { id: "2", todo: "bbb" }
  ]);
  const [completeTodo, setCompleteTodo] = useState<TodoType[]>([
    { id: "3", todo: "ccc" }
  ]);

  return (
    <>
      <InputTodo
        incompleteTodo={incompleteTodo}
        setIncompleteTodo={setIncompleteTodo}
      />
      <div className="todo-component">
        <IncompleteTodo
          incompleteTodo={incompleteTodo}
          setIncompleteTodo={setIncompleteTodo}
          completeTodo={completeTodo}
          setCompleteTodo={setCompleteTodo}
        />
        <CompleteTodo
          incompleteTodo={incompleteTodo}
          setIncompleteTodo={setIncompleteTodo}
          completeTodo={completeTodo}
          setCompleteTodo={setCompleteTodo}
        />
      </div>
    </>
  );
}
