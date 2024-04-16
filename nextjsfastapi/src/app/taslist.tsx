"use client"
import { DelTask } from "./action";
import { Task } from "./page";


const Tasklist = ({ tasklist }: { tasklist: Task[] }) => {
    return (
      <div className="">
        {tasklist.map((task: Task) => {
          return (
            <div className="flex" key={task.id}>
              <p>
                {task.id}
                {task.content}
                <button onClick={() => DelTask({ content: task.content, id: task.id })}>
  Delete
</button>
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  export default Tasklist;