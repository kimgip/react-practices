import React from 'react';
import {grocery_item} from './assets/scss/GroceryItem.scss';

function GroceryItem({name, count}) {
    return (
        <li className={grocery_item}>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;