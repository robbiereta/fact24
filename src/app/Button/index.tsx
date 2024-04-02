'use client'
import React from 'react';
import styles from './Button.module.css';
import axios from 'axios';


function Botondetimbre() {
  

  function getFacturaBorrador(id) {
    axios.get('http://localhost:3008/facturas_borradorObject/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    console.log("Facturado");
  }
   let fact = "Facturado"
   let id=1
  return (
    <div className={styles.container}>
      
      <button  onClick={() => getFacturaBorrador(id)}>Timbrar</button>

    </div>
  );
};

export default Botondetimbre;
