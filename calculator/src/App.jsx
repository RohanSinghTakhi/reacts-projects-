
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'
import Display from './components/Display'
import './App.css'
import { useState } from 'react';

function App() {
  let buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
function cal(event){

  if(event.target.innerText=="C"){
    displayval("")
  }
  else if(event.target.innerText=="="){
    try {
      displayval(eval(val).toString());
    } catch (e) {
      displayval('Error');
  }}
  else{ 
    let dis=[val+event.target.innerText]
    displayval(dis)
  }
}

  let [val,displayval]=useState("rohan")

  return (
 
      <div className={styles.calculator}>
        <Display val={val}></Display>
        <ButtonContainer buttons={buttonNames} cal={cal}></ButtonContainer>
        
      </div>
    
  )
}

export default App
