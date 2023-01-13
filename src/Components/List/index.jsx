import styles from './List.module.scss'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { GiBroom } from 'react-icons/gi'

const List = ({list, handleDeleteAll, handleRemoveTask, title}) => {
    return (
        <section className={styles['list-section']}>
            <div className={styles['list-container']}>
                <h2 className={styles.title}>{title}</h2>
                <button className={styles['list-delete']} onClick={handleDeleteAll}><GiBroom /></button>
            </div>
            <div className={styles['list-group']}>
                <ul className={styles.list}>
                    {(list !== null || '') &&
                        list.map((item, index) => (
                            <li className={styles['list-item']} key={item.id}>
                                <div className={styles['item-container']}>
                                    <h4 className={styles['item-title']}>
                                        {item.task}
                                    </h4>
                                    <div className={styles['item-config']}>
                                        <BiEdit className={styles['item-edit']} />
                                        <AiOutlineDelete className={styles['item-delete']} onClick={() => handleRemoveTask(index)} />
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
        </section>
    )
}

export default List;