import React from 'react';
import TabItem from './TabItem';

function Tabs({tabs, selectTab}) {
    return (
        <ul>
            {tabs.map((e, i)=><TabItem key={e.no} name={e.name} active={e.active} selectTab={selectTab} no={i}/>)}
        </ul>
    );
}

export default Tabs;