import React from 'react';
import GroceryItem from './GroceryItem';
import {grocery_list} from './assets/scss/GroceryList.scss'

function GroceryList({groceries}) {
    return (
        <ol className={grocery_list}>
            { groceries.map((e, i) => <GroceryItem key={i} name={e.name} count={e.count}/>) }
        </ol>
    );
}

export default GroceryList;