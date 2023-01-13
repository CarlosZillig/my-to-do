import { useEffect, useState } from 'react';
import '../../App.scss';
import Form from './Formulario';
import List from '../../Components/List';
import styles from './Tasks.module.scss'

function Tasks() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //State responsavel por renderizar nossa lista de tasks
  const [listTask, setListTask] = useState(JSON.parse(localStorage.getItem('tasks')))

  //State responsavel por guardar todas as tasks da lista
  const [tasks, setTasks] = useState(listTask)

  //Adicionando tarefas para o state
  function addTask(task) {
    setTasks([...tasks, task])
    setDesc('')
    setTitle('')
  }

  //Verifica se existe algo na state controladora, caso nao ouver, seta um array vazio, assim evitando um suposto erro gerado ao deletar todas as tarefas.
  useEffect(() => {
    if (tasks.length <= 0) {
      localStorage.setItem('tasks', [])
    } else {
      return;
    }
  }, [])

  //Função para excluir todas as tarefas permanentemente
  const handleDeleteAll = () => {
    setTasks([]);
  }

  //Função para remover uma tarefa
  const handleRemoveTask = (index) => {
    setTasks(() => {
      return tasks.splice(index, 1)
    })
    console.log(`Removendo a tarefa ${index}`)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <Form
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          addTask={addTask}
        />
        <List list={tasks} handleDeleteAll={handleDeleteAll} handleRemoveTask={handleRemoveTask} title='Suas tarefas' />
      </div>
    </div>
  );
}

export default Tasks;