import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, updateTask, deleteTask}) {
    const [checked, setChecked] = useState(done == 'Y' ? true : false)
    return (
        <li class={_Task}>
            <input type='checkbox' defaultChecked={checked} onClick={() => {
                setChecked(!checked);
                updateTask({
                    no: no,
                    done: !checked ? 'Y' : 'N'
                });
            }}/>
            {name}
            <a href='#' className={Task_Remove} onClick={(e) => {
                e.preventDefault();
                deleteTask(no);
            }}></a>
        </li>
    );
}

export default Task;