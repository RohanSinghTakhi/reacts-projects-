import styles from '../App.module.css'; 

function ButtonContainer({ buttons,cal }) {

  return (
    <div className={styles.ButtonContainer}>
      {buttons.map((button) => (
        <button key={button} className={styles.button} onClick={cal}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
