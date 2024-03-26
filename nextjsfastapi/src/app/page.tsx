import { getTask } from "./action";
interface Task {

  id: 2,
  content:"Bushra khan"
}


export default async function Home() {
 
  const tasklist:Task[] = await getTask("http://127.0.0.1:8000/todos")
  console.log(tasklist)
  return (
    <div className="text-center">
    <h1>FastAPI get request integration on Next.js 14</h1>
    <p>TODO List</p>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {tasklist && tasklist.map((task: Task) => {
          return (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.content}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  )}