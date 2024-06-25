import styles from '../App.module.css'; 

function ButtonContainer({ buttons }) {

  return (
    <div className={styles.ButtonContainer}>
      {buttons.map((button) => (
        <button key={button} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
