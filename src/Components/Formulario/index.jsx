import React from 'react';
import Button from '../Button';
import styles from "./Formulario.module.scss"
import TextField from "./TextField/index"

const Form = () => {
    return(
        <form className={styles.formulario}>
            <TextField 
                type="text" 
                placeholder="Titulo da tarefa" 
                id="inputTitle">Adicione uma tarefa:
            </TextField>
            <TextField
                type="text"
                placeholder="Adicione uma descrição"
                id="inputDescription"
            >Descrição:</TextField>
            <Button type='submit'>Adicionar</Button>
        </form>    
    )
}

export default Form;