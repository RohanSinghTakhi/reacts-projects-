import { useState } from 'react'
import Add from './Components/Add'
import './App.css'
import List from './Components/list'
 
function App() {
const [color, setColor] = useState(["anime","coding","games"]);
const [todo,settodo] = useState("")
function rohan(events){
  let todo=[...color,events.target.value]
  
}
  return (
    <><h2>TODO APP</h2>
     <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add todo" aria-label="Add todo" onChange={rohan} />
        <input type="datetime-local" className="form-control" aria-label="Due date" />
        <button className="btn btn-primary" type="button" onClick={()=>{settodo()}}>Add</button>
      </div>
      
     <List items={color} ></List>

    </>
  )
}

export default App
