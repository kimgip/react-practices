import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import data from './assets/json/data.js';

function KanbanBoard() {
    const [cards, setCards] = useState(data);

    const addTask = async (task) => {
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            // setCards();

        } catch(err) {
            console.error(err);
        }
    }

    const fetchCards = async () => {
        try {
            const response = await fetch(`/api`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            console.log(json.data);
            setCards(json.data);

        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className='Kanban_Board'>
            <CardList name={'To Do'} cards={cards.filter(e => e.status=='ToDo')} addTask={addTask}/>
            <CardList name={'Doing'} cards={cards.filter(e => e.status=='Doing')} addTask={addTask}/>
            <CardList name={'Done'} cards={cards.filter(e => e.status=='Done')} addTask={addTask}/>
        </div>
    );
}

export default KanbanBoard;