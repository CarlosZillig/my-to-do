import useTasksSetter from "./useTasksSetter"
import useTrashList from "../trashList/useTrashList"
import useTrashSetter from '../trashList/useTrashSetter'

//Hook para remover uma tarefa do Recoil
const useDeleteTask = () => {
  const setTask = useTasksSetter();
  const setTrash = useTrashSetter();
  const trash = useTrashList();

  return (item) => {  
    setTrash([...trash, item])
    setTask(listaAntiga => listaAntiga.filter(task => task.id !== item.id))
  }
}

export default useDeleteTask;

