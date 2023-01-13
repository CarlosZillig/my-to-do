import { useState } from "react";
import styles from './Dump.module.scss';
import List from "../../Components/List";

const Dump = () => {

  const [trash, setTrash] = useState([{
    id: 1,
    task: 'A',
    desc: 'b'
  }])

  return (
    <section className={styles['dump-section']}>
      <List title='Apagados' list={trash} />
    </section>
  )
}

export default Dump;