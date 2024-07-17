import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({name, cards}) {
    return (
        <div className={Card_List}>
            <h1>{name}</h1>
            {
                cards.map(
                    (e) => {
                        return <Card key={e.no} title={e.title} description={e.description} tasks={e.tasks}/>
                    }
                )
            }
        </div>
    );
}

export default CardList;