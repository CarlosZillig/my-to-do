import { atom } from 'recoil';

const listTasksState = atom({
    key: 'listTasksState',
    default: []
})

export default listTasksState;