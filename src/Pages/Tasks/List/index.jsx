import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { GiBroom } from 'react-icons/gi'
import { useEffect } from 'react'

const List = ({tasks, handleDelete}) => {
    return (
        <section>
            <div className={styles['list-container']}>
                <h2 className={styles.title}>Suas tarefas</h2>
                <button className={styles['list-delete']} onClick={handleDelete}><GiBroom /></button>
            </div>
            <div className={styles['list-section']}>
                <ul className={styles.list}>
                    {(tasks !== null || '') &&
                        tasks.map(task => (
                            <li className={styles['list-item']} key={task.id}>
                                <div className={styles['item-container']}>
                                    <h4 className={styles['item-title']}>
                                        {task.task}
                                    </h4>
                                    <div className={styles['item-config']}>
                                        <BiEdit className={styles['item-edit']} />
                                        <AiOutlineDelete className={styles['item-delete']} />
                                    </div>
                                </div>
                                <p className={styles['item-desc']}>
                                    {task.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default List;