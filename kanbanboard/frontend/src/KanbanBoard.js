import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import data from './assets/json/data.js';

function KanbanBoard() {
    return (
        <div className='Kanban_Board'>
            <CardList name={'To Do'} cards={data.filter(e => e.status=='ToDo')}/>
            <CardList name={'Doing'} cards={data.filter(e => e.status=='Doing')}/>
            <CardList name={'Done'} cards={data.filter(e => e.status=='Done')}/>
        </div>
    );
}

export default KanbanBoard;