import { useState ,useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import LoginIds from './store/LoginIds'
import "./App.css"
import Display from './components/Displays';

function App() {


  return (
    <LoginIds>
     <Form></Form>
     <Display></Display>
    </LoginIds> 
  )
}

export default App
