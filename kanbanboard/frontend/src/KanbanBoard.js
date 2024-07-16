import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    return (
        <div className='Kanban_Board'>
            <CardList name={'To Do'}/>
            <CardList name={'Doing'}/>
            <CardList name={'Done'}/>
        </div>
    );
}

export default KanbanBoard;