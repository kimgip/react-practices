import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList(props) {
    return (
        <div className={Task_List}>
            <ul>
                <Task />
            </ul>
            <input class={Input_Add_Task} type='text' placeholder='태스크 추가' />

        </div>
    );
}

export default TaskList;