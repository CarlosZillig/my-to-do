import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import Button from '../../../Components/Button';
import styles from "./Formulario.module.scss";
import TextField from "./TextField/index";
import classNames from 'classnames';

const Form = ({ title, setTitle, desc, setDesc, addTask }) => {
    const [erro, setErro] = useState('')
    function addTaskForm(e) {
        e.preventDefault()
        if (title !== '' && desc !== '') {
            addTask({ task: title, desc: desc, id: uuid() })
            setErro('')
        } else {
            setErro('Há campos vazios')
        }
    }

    const [form, setForm] = useState(false)
    const [addTaskBtn, setAddTaskBtn] = useState(true)
    function showForm() {
        setForm(!form)
        setAddTaskBtn(!addTaskBtn)
    }

    return (
        <>  
            <div className={styles.addTaskBtn__container}>
                <button className={classNames({
                    [styles.addTaskBtn]: true,
                    [styles.addTaskBtn__off]: addTaskBtn == false
                })} onClick={showForm}>+</button>
            </div>
            <form className={classNames({
                [styles.formulario]: true,
                [styles.formularioOff]: form == false
            })} onSubmit={addTaskForm}>
                <TextField
                    type="text"
                    id="inputTitle"
                    label="Adicione uma tarefa"
                    title={title}
                    setTitle={setTitle}
                    desc={desc}
                    setDesc={setDesc}
                />
                <Button type='submit'>Adicionar</Button>
                <span className={styles.erro}>{erro}</span>
            </form>
        </>
    )
}

export default Form;