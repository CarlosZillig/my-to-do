import { useEffect, useState } from 'react';
import './App.scss';
import Form from './Pages/Tasks/Formulario';
import Header from './Components/Header';
import List from './Pages/Tasks/List';
import uuid from 'react-uuid';
import styles from './App.module.scss'
import Nav from './Components/NavDesktop';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //State responsavel por renderizar nossa lista de tasks
  const [listTask, setListTask] = useState(JSON.parse(localStorage.getItem('tasks')))

  //State responsavel por guardar todas as tasks da lista
  const [tasks, setTasks] = useState(listTask)

  //Adicionando tarefas para o estado
  function addTask(task) {
    setTasks([...tasks, task])
    setDesc('')
    setTitle('')
  }

  const handleDelete = () => {
    setTasks([])
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  //Funções do menu mobile
  const [menu, setMenu] = useState(false)
  function menuMobile() {
      setMenu(!menu)
      console.log(menu)
  }

  return (
    <div className="App">
      <Header menuMobile={menuMobile}/>
      <div className={styles.container}>
        <Nav menu={menu}/>
        <Form
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          addTask={addTask}
        />
        <List tasks={tasks} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
