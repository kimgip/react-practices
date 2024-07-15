import React from 'react';
import './assets/scss/TabBox.scss';

function TabItem({name, active, selectTab, no}) {
    return (
        <li 
            className={active ? 'active' : ''}
            onClick={() => {
                selectTab(no);
            }}
        >{name}</li>
    );
}

export default TabItem;
