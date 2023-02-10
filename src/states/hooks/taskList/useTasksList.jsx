import { useRecoilValue } from "recoil";
import listTasksState from "../../atomList";

//Encapsulando o acesso ao Recoil
const useTasksList = () => {
  return useRecoilValue(listTasksState)
}

export default useTasksList;