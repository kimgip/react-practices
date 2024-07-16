import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task(props) {
    return (
        <li class={_Task}>
            <input type='checkbox' checked='false'/>사용자 스토리 리스트업
            <a href='#' class={Task_Remove}></a>
        </li>
    );
}

export default Task;