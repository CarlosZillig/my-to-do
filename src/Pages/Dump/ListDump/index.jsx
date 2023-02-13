import useTrashList from '../../../states/hooks/trashList/useTrashList';
import style from './ListDump.module.scss'

const ListDump = () => {
  const trash = useTrashList();

  return (
    <div className={style['list-dump']}>
      <ul>
        {trash.length == 0 && <h1>Sua lixeira está limpa</h1>}
        {trash.map((item) => (
          <h1>{item.task}</h1>
        ))}
      </ul>
    </div>
  )
}

export default ListDump;