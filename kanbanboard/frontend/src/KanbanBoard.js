import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import data from './assets/json/data.js';

function KanbanBoard() {
    const [cards, setCards] = useState(data);

    const deleteTask = async (no) => {
        try {
            const response = await fetch(`/api?no=${no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            fetchCards();

        } catch(err) {
            console.error(err);
        }
    }

    const updateTask = async (task) => {
        try {
            const response = await fetch('/api', {
                method: 'put',
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

        } catch(err) {
            console.error(err);
        }
    }

    const addTask = async (task, refInput) => {
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
            
            refInput.current.value = "";
            fetchCards();

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
            <CardList
                name={'To Do'}
                cards={cards.filter(e=>e.status=='ToDo')}
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
            <CardList
                name={'Doing'}
                cards={cards.filter(e=>e.status=='Doing')}
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />
            <CardList
                name={'Done'}
                cards={cards.filter(e=>e.status=='Done')}
                addTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />

        </div>
    );
}

export default KanbanBoard;