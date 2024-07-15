import React from 'react';
import GroceryList from './GroceryList';
import {title} from './assets/scss/App.scss'

function App() {
    const groceries = [
        {name: 'Egg', count:10},
        {name: 'Milk', count:20},
        {name: 'Bread', count:30}
    ]
    return (
        <div id={'App'}>
            <h1 className={title}>{'Grocery List'}</h1>
            <GroceryList groceries={groceries}/>
        </div>
    );
}

export default App;