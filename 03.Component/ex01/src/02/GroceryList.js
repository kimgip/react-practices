import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    // const GroceryItem = [];
    // groceries.forEach(e => {
    //     GroceryItem.push(<GroceryItem name={e.name} count={e.count}/>);
    // });
    return (
        <ol className={'grocery-list'}>
            { groceries.map((e, i) => <GroceryItem key={i} name={e.name} count={e.count}/>) }
        </ol>
    );
}

export default GroceryList;