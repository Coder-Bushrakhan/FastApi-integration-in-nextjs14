"use client"
import { useState } from "react";
import { AddTask } from "./action";
export default function Home() {
  const [content, setContent] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await AddTask("http://127.0.0.1:8000/todos/", { content });
    setContent("");
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}