import React, { useRef } from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({no, tasks, addTask, updateTask, deleteTask}) {
    const refInput = useRef(null);

    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((e) => {
                    return <Task no={e.no} name={e.name} done={e.done} updateTask={updateTask} deleteTask={deleteTask}/>
                })}
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가' ref={refInput} onKeyDown={(e) => {
                if (e.key == 'Enter')
                    {
                        addTask({
                            name: e.target.value,
                            done: 'N',
                            cardNo: no
                        }, refInput);
                    } 
            }}/>

        </div>
    );
}

export default TaskList;