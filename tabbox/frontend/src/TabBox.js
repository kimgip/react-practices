import React from 'react';
import TabItem from './TabItem';

function TabBox({tabs}) {
    return (
        <div class="tab-box">
            <ul>
                {tabs.map(e=><TabItem key={e.no} name={e.name} active={e.active}/>)}
            </ul>
            <div>{"탭 뷰입니다."}</div>
        </div>
    );
}

export default TabBox;