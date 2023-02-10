import { useRecoilValue } from "recoil";
import listTrashState from '../../atomTrash'

const useTrashList = () => {
    return useRecoilValue(listTrashState)
}

export default useTrashList;