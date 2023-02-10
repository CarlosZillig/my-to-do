import { useSetRecoilState } from "recoil"
import listTrashState from '../../atomTrash'

const useTrashSetter = () => {
  return useSetRecoilState(listTrashState)
}

export default useTrashSetter;