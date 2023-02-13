import { useState } from 'react';
import '../../App.scss';
import Form from './Formulario';
import List from './List';
import styles from './Tasks.module.scss'

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
      <section className={styles.tasks}>
        <div className={styles.container}>
          <Form
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
          />
          <List />
        </div>
      </section>
  );
}

export default Tasks;