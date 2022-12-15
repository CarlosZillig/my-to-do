import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

const List = ({ listTask }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Suas tarefas</h2>
            <section className={styles['list-section']}>
                <ul className={styles.list}>
                    {listTask !== null &&
                        listTask.map(item => (
                            <li className={styles['list-item']}>
                                <div className={styles['item-container']}>
                                    <h4 className={styles['item-title']}>
                                        {item.task}
                                        {console.log(item.task.length)}
                                    </h4>
                                    <div className={styles['item-config']}>
                                        <BiEdit className={styles['item-edit']}/>
                                        <AiOutlineDelete className={styles['item-delete']} />
                                    </div>
                                </div>
                                <p className={styles['item-desc']}>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default List;