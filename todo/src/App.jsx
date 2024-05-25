import { useState } from 'react'
import Add from './Components/Add'
import './App.css'
import List from './Components/list'

function App() {
  const [count, setCount] = useState(0)

  
  

  return (
    <><h2>TODO APP</h2>
     <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Add todo" aria-label="Add todo" />
        <input type="datetime-local" className="form-control" aria-label="Due date" />
        <button className="btn btn-primary" type="button">Add</button>
      </div>
     <List></List>
    </>
  )
}

export default App
