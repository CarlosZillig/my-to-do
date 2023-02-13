import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { GiBroom } from 'react-icons/gi'
import useDeleteTask from '../../../states/hooks/taskList/useDeleteTask'
import useDeleteAll from '../../../states/hooks/taskList/useDeleteAll'
import useTasksList from '../../../states/hooks/taskList/useTasksList'
import useTasksSetter from '../../../states/hooks/taskList/useTasksSetter'
import useTrashList from '../../../states/hooks/trashList/useTrashList'

const ListTasks = () => {

    const handleRemoveTask = useDeleteTask();
    const handleDeleteAll = useDeleteAll();
    const setTask = useTasksSetter()
    const trash = useTrashList();
    const tasks = useTasksList();

    const handleUpdateTask = (item) => {
        const newTasks = tasks.map((task) => {
            if(task.id === item) {
                return {
                    ...task,
                    task: 1
                }
            }
            return task
        })
        setTask(newTasks)
        console.log(trash)
    }

    return (
        <div className={styles['list-section']}>
            <div className={styles['list-container']}>
                <h2 className={styles.title}>Suas tarefas</h2>
                <button className={styles['list-delete']} onClick={handleDeleteAll}><GiBroom /></button>
            </div>
            
            <div className={styles['list-group']}>
                <ul className={styles.list}>
                    {tasks.length == 0 && <li className={styles.placeholder}>Nenhuma tarefa por aqui...</li>}
                        {tasks.map((item) => (
                            <li className={styles['list-item']} key={item.id}>
                                <div className={styles['item-container']}>
                                    <h4 className={styles['item-title']}>
                                        {item.task}
                                    </h4>
                                    <div className={styles['item-config']}>
                                        <BiEdit className={styles['item-edit']} onClick={() => handleUpdateTask(item.id)}/>
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
            </div>
        </div>
    )
}

export default ListTasks;