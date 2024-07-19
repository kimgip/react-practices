import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({no, tasks, addTask}) {
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((e) => {
                    return <Task name={e.name} done={e.done}/>
                })}
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가' onKeyDown={(e) => {
                e.key == 'Enter' ? 
                    addTask({
                        name: e.target.value,
                        done: 'N',
                        cardNo: no
                    })
                    :
                    null
            }}/>

        </div>
    );
}

export default TaskList;