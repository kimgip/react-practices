import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ol className={'grocery-list'}>
                {
                    this.props.groceries.map((e, i) => <GroceryItem key={i} name={e.name} count={e.count}/>)
                }
            </ol>
        );
    }
}

export default GroceryList;