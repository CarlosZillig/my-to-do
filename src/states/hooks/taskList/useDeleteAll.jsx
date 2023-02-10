import useTasksSetter from "./useTasksSetter";

const useDeleteAll = () => {
  const setTask = useTasksSetter();
  return () => {
    setTask([])
  }
}

export default useDeleteAll;