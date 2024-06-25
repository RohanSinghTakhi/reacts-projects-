
import ButtonContainer from './components/ButtonContainer'
import styles from './App.module.css'
import Display from './components/Display'
import './App.css'

function App() {
  let buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
 
      <div className={styles.calculator}>
        <Display></Display>
        <ButtonContainer buttons={buttonNames}></ButtonContainer>
        
      </div>
    
  )
}

export default App
