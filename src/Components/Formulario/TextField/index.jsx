import React from 'react';
import styles from "./TextField.module.scss"

const TextField = (props) => {
    return(
        <div className={styles.formContainer}>
            <label for={props.id} className={styles.formLabel}>{props.children}</label>
            <input type={props.type} placeholder={props.placeholder} id={props.id} className={styles.inputTarefa} />
        </div> 
    )
}

export default TextField;
