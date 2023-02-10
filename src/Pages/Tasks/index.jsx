import { useEffect, useState } from 'react';
import '../../App.scss';
import Form from './Formulario';
import List from '../../Components/List';
import styles from './Tasks.module.scss'
import { RecoilRoot } from 'recoil';
import useTasksList from '../../states/hooks/taskList/useTasksList';

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <RecoilRoot>
      <div className={styles.tasks}>
        <div className={styles.container}>
          <Form
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
          />
          <List title='Suas tarefas' list='tasks' />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Tasks;