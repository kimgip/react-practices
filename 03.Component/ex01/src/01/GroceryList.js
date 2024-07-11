import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList(props) {
    return (
        <ol className={'grocery-list'}>
            <GroceryItem name={'Bread'} count={10} />
            <GroceryItem name={'milk'} count={30} />
            <GroceryItem name={'egg'} count={20} />
        </ol>
    );
}

export default GroceryList;