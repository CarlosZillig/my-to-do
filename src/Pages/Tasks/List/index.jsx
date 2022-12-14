import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'

const List = ({listTask}) => {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Suas tarefas</h2>
            <section className={styles['list-section']}>
                <ul className={styles.list}>
                    {listTask !== null && 
                        listTask.map(item => (
                            <li className={styles['list-item']}>
                                <h4 className={styles['item-title']}>
                                    {item.task}
                                </h4>
                                <p className={styles['item-desc']}>
                                    {item.desc}
                                </p>
                                <AiOutlineDelete className={styles['item-delete']}/>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    )
}

export default List;