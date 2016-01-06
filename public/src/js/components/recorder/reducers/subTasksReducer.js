import {ADD, DELETE, EDIT} from '../constants/subTasksActionType.js'

const initialState = [
    {
        id: 1,
        name: 'LPS-12345'
    }
];

export default function subTasks(state = initialState, action = {}) {
    switch (action.type) {
        case ADD:
            let temp = [{
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                name: action.name
            }];

            return temp.concat(state);
        case DELETE:
            return state;
        case EDIT:
            return state;
        default:
            return state
    }
};
