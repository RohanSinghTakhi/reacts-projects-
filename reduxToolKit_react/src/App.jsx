import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
    </>
  )
}

export default App
