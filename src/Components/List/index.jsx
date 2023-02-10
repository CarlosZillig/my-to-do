import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { GiBroom } from 'react-icons/gi'
import useDeleteTask from '../../states/hooks/taskList/useDeleteTask'
import useDeleteAll from '../../states/hooks/taskList/useDeleteAll'
import useTasksList from '../../states/hooks/taskList/useTasksList'
import useTrashList from '../../states/hooks/trashList/useTrashList'

const List = ({ title, list }) => {

    const handleRemoveTask = useDeleteTask();
    const handleDeleteAll = useDeleteAll();
    const trash = useTrashList();
    const tasks = useTasksList();

    return (
        <section className={styles['list-section']}>
            <div className={styles['list-container']}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles['list-delete']} onClick={handleDeleteAll}><GiBroom /></button>
            </div>
            
            <div className={styles['list-group']}>
            {tasks.length == 0 && <div className={styles.placeholder}>Nenhuma tarefa por aqui...</div>}
            
                {list === 'tasks' && <ul className={styles.list}>
                    {tasks.map((item) => (
                        <li className={styles['list-item']} key={item.id}>
                            <div className={styles['item-container']}>
                                <h4 className={styles['item-title']}>
                                    {item.task}
                                </h4>
                                <div className={styles['item-config']}>
                                    <BiEdit className={styles['item-edit']} />
                                    <AiOutlineDelete className={styles['item-delete']} onClick={() => handleRemoveTask(item)} />
                                </div>
                            </div>
                            <p className={styles['item-desc']}>
                                {item.desc}
                            </p>
                        </li>
                    ))
                    }
                </ul>
                }

                {list === 'trash' && <ul className={styles.list}>
                    {trash.map((item) => (
                        <li className={styles['list-item']} key={item.id}>
                            <div className={styles['item-container']}>
                                <h4 className={styles['item-title']}>
                                    {item.task}
                                </h4>
                                <div className={styles['item-config']}>
                                    <BiEdit className={styles['item-edit']} />
                                    <AiOutlineDelete className={styles['item-delete']} onClick={() => handleRemoveTask(item)} />
                                </div>
                            </div>
                            <p className={styles['item-desc']}>
                                {item.desc}
                            </p>
                        </li>
                    ))
                    }
                </ul>
                }
            </div>
        </section>
    )
}

export default List;