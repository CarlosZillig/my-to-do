import useTrashList from '../../../states/hooks/trashList/useTrashList';
import styles from './ListDump.module.scss'

const ListDump = () => {
  const trash = useTrashList();

  return (
    <div className={styles['list-dump--container']}>
      <div className={styles['list-total']}>Total: {trash.length}</div>
      <ul className={styles['list-dump']}>
        {trash.length == 0 && <h1 className={styles['dump-clear']}>Sua lixeira está limpa</h1>}
        {trash.map((item, index) => (
          <li className={styles['list-item']} key={item.id}>
            <div className={styles['item-container']}>
              <span className={styles['item-position']}>{index + 1}.</span>
              <span className={styles['item-title']}>{item.task}</span>
            </div>
            <p className={styles['item-desc']} style={{ display: 'none' }}>
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListDump;