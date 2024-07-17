import React, { useState } from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card({title, description, tasks}) {
    const [show, setShow] = useState(false)

    return (
        <div className={_Card}>
            <div className={show ? [Card_Title, Card_Title_Open].join(' ') : Card_Title} onClick={() => setShow(!show)}>
                {title}
            </div>
                <div className={'Card_Details'}>
                    {description}
                    {
                        show ?
                        <TaskList tasks={tasks}/>
                        :
                        null
                    }
                </div>
        </div>
    );
}

export default Card;