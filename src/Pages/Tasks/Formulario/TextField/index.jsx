import React from 'react';
import styles from "./TextField.module.scss"

const TextField = ({id, type, title, setTitle, desc, setDesc}) => {
    return(
        <div className={styles.formContainer}>
            <h2 className={styles['formContainer-title']}>Adicione uma tarefa:</h2>
            <div className={styles['formContainer-title-task']}>
                <input 
                    type={type} 
                    placeholder='Adicione um titulo' 
                    id={id} 
                    className={styles.inputTitle} 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
            </div>
            <div className={styles['formContainer-desc-task']}>
                <input                     
                    type={type} 
                    placeholder='Adicione uma descrição'
                    id={id} 
                    className={styles.inputDesc} 
                    value={desc}
                    onChange={event => setDesc(event.target.value)}
                />
            </div>
        </div> 
    )
}

export default TextField;