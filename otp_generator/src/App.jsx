import { useState } from 'react'
import './App.css'
import Layout from "./components/Layout";
import OptButton from './components/OptButton';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="box1">
      <h2>OTP GENERATOR</h2>
      <Layout>

      </Layout>
      <OptButton></OptButton>
      </div>
    </>
  )
}

export default App
