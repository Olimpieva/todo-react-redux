
import { TASK_ADD, TASK_REMOVE, TASK_TOGGLE } from './actionTypes';

export const addTask = (task) => ({
    type: TASK_ADD,
    payload: task,
});

export const toggleTask = id => ({
    type: TASK_TOGGLE,
    payload: { id },
});

export const removeTask = id => ({
    type: TASK_REMOVE,
    payload: { id },
})