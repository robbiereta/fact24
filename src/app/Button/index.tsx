import React from 'react';
import styles from './Button.module.css';


const Button = () => {
  return (
    <div className={styles.container}>
      <button  onClick={() => console.log('clicked')} className={styles.button}>Click me</button>
    </div>
  );
};

export default Button;
