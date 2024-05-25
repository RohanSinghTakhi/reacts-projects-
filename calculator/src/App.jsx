

import styles from './App.module.css'
import './App.css'

function App() {

  return (
 
      <div className={styles.calculator}>
        <input type="text" className={styles.disply} />

        <div id="Button-container">
            <button>C</button>          
        </div>
      </div>
    
  )
}

export default App
