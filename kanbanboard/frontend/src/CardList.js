import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({name, cards}) {
    return (
        <div className={Card_List}>
            <h1>{name}</h1>
            <Card />
        </div>
    );
}

export default CardList;