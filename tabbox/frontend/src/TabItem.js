import React from 'react';
import {tab_active} from './assets/scss/TabBox.scss';

function TabItem({name, active}) {
    return (
        <li className={active ? tab_active : ''}>{name}</li>
    );
}

export default TabItem;
