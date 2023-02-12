import useTasksList from "./useTasksList";
import useTasksSetter from "./useTasksSetter"
import useTrashList from "../trashList/useTrashList"
import useTrashSetter from '../trashList/useTrashSetter'

//Hook para remover uma tarefa do Recoil
const useDeleteTask = () => {
  const setTask = useTasksSetter();
  const tasks = useTasksList();
  const setTrash = useTrashSetter();
  return (item) => {  
    let removedItem = tasks.filter(task => task.id === item.id)
    setTrash(state => [...state, removedItem])
    setTask(listaAntiga => listaAntiga.filter(task => task.id !== item.id))
  }
}

export default useDeleteTask;

