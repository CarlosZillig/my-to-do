import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import styles from "./Formulario.module.scss";
import TextField from "./TextField/index";
import classNames from 'classnames';
import useAddTask from '../../../states/hooks/taskList/useAddTask';
import useTasksSetter from '../../../states/hooks/taskList/useTasksSetter';
import useTasksList from '../../../states/hooks/taskList/useTasksList';

const Form = ({ title, setTitle, desc, setDesc }) => {
    const [errorString, setErrorString] = useState('');
    const addTask = useAddTask()

    //Função responsavel por adicionar um novo objeto á lista
    function addTaskForm(e) {
        e.preventDefault();
        if (title !== '' && desc !== '') {
            addTask({task: title, desc: desc, id: uuid()})
            setErrorString('')
            setTitle('')
            setDesc('')
        } else {
            setErrorString('Há campos vazios')
        }
    }

    const [form, setForm] = useState(true)
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
                    [styles.addTaskBtn__off]: addTaskBtn === true
                })} onClick={showForm}>+</button>
            </div>
            <form 
            className={classNames({
                [styles.formulario]: true,
                [styles.formularioOff]: form === false
            })} 
            onSubmit={addTaskForm}>
                <TextField
                    type="text"
                    id="inputTitle"
                    label="Adicione uma tarefa"
                    title={title}
                    setTitle={setTitle}
                    desc={desc}
                    setDesc={setDesc}
                />
                <span className={styles.error}>{errorString}</span>
            </form>
        </>
    )
}

export default Form;