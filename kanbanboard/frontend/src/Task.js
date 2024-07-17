import React, { useState } from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({name, done}) {
    const [checked, setChecked] = useState(done)
    return (
        <li class={_Task}>
            <input type='checkbox' checked={checked} onClick={() => setChecked(!checked)}/>
            {name}
            <a href='#' className={Task_Remove}></a>
        </li>
    );
}

export default Task;