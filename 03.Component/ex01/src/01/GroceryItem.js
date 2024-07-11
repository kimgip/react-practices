import React from 'react';

function GroceryItem({name, count}) {
    return (
        <div>
            <li>
                <strong>{name}</strong>
                <span>{count}</span>
            </li>
        </div>
    );
}

export default GroceryItem;