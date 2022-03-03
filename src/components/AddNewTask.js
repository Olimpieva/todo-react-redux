
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";

import { addTask } from "../store/actions";


function AddNewTask({ task }) {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleTaskTitleChange = (event) => {
        setTaskTitle(event.target.value);
    }

    const handleTaskSubmit = () => {
        dispatch(addTask({
            title: taskTitle
        }));
        setTaskTitle('');
    }

    return (
        <InputGroup className="mb-3">
            <FormControl placeholder="Add new task" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
            <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleTaskSubmit}>Save</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default AddNewTask;