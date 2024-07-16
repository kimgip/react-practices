import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';

function Card({title, contents}) {
    return (
        <div className={_Card}>
            <div className={[Card_Title, Card_Title_Open].join(' ')}>
                Stroy Board 작성
            </div>
            <div className={'Card_Details'}>
                기능 기반의 화면 목업 작업
                <TaskList />
            </div>
        </div>
    );
}

export default Card;