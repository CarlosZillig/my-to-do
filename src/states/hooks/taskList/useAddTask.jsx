import useTasksList from "./useTasksList";
import useTasksSetter from "./useTasksSetter";

const useAddTask = () => {
  const tasks = useTasksList()
  const setTask = useTasksSetter()
  return (task) => {
    setTask([...tasks, task])
  }
}

export default useAddTask;