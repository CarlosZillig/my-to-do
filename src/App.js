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

  let tasks = [{
    task: "a",
    desc: "b",
    id: uuid()
  }]

  const [listTask, setListTask] = useState(tasks)

  //Adicionando tarefas para o estado
  function addTask(task) {
    setListTask([...listTask, task])
    setDesc('')
    setTitle('')
  }

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
        <List listTask={listTask} />
      </div>
    </div>
  );
}

export default App;
