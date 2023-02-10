import { useState } from "react";
import styles from './Dump.module.scss';
import List from "../../Components/List";
import useTrashList from "../../states/hooks/trashList/useTrashList";

const Dump = () => {
  return (
    <section className={styles['dump-section']}>
      <List title='Apagados' list='trash' />
    </section>
  )
}

export default Dump;