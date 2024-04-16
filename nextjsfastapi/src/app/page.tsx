import { DelTask, getTask } from "./action";

import Input from "./inputField";
import Tasklist from "./taslist";

export interface Task {

  id: number,
  content:string
}

export default async function Home() {
 

  const tasklist:Task[] = await getTask("http://127.0.0.1:8000/todos/")
  console.log(tasklist)
  return (
    <div className="text-center">
    <h1>FastAPI get request integration on Next.js 14</h1>
    <p>TODO List</p>
   
     
     <Input/>
<Tasklist tasklist={tasklist}/>

  </div>
  )}