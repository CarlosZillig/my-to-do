import { useSetRecoilState } from "recoil"
import listTasksState from "../../atomList"

//Encapsulando o acesso ao Recoil
const useTasksSetter = () => {
  return useSetRecoilState(listTasksState)
}

export default useTasksSetter;