import styles from './List.module.scss'

const List = () => {
    return(
        <section className={styles['list-section']}>
            <h2 className={styles.title}>Suas tarefas</h2>
            <ul className={styles.list}>
                <li className={styles['list-item']}>
                    <h4 className={styles['item-title']}>Tarefa 1</h4>
                    <p className={styles['item-desc']}>Fazer ate meio dia</p>
                </li>
            </ul>
        </section>
    )
}

export default List;