
import { TASK_ADD, TASK_REMOVE, TASK_TOGGLE } from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {

    const { type, payload } = action;

    switch (type) {
        case TASK_ADD:
            return [...state, {
                id: ++lastId, // увеличиваем id на единицу
                title: payload.title, //в качестве title задаем значение переданное пользователем
                completed: false,  // у нового таска статус будет не выполнен
            }];
        case TASK_TOGGLE:
            return state.map(task => {
                if (task.id === payload.id)
                    return { ...task, completed: !task.completed }
                return task;
            });
        case TASK_REMOVE:
            return state.filter(task => action.payload.id !== task.id);
        default:
            return state;
    }
}