import React from 'react';
import Button from '../Button';
import styles from "./Formulario.module.scss"
import TextField from "./TextField/index"

const Form = ({title, setTitle, desc, setDesc}) => {
    return(
        <form className={styles.formulario}>
            <TextField 
                type="text" 
                placeholder="Titulo da tarefa" 
                id="inputTitle"
                label="Adicione uma tarefa"
                title={title} 
                setTitle={setTitle}
                desc={desc}
                setDesc={setDesc}
            />
            <Button type='submit'>Adicionar</Button>
        </form>    
    )
}

export default Form;