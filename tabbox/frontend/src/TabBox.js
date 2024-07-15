import React, { useState } from 'react';
import Tabs from './Tabs';
import {tab_box} from './assets/scss/TabBox.scss';
import TabView from './TabView';
import tabs from './assets/json/data';

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={tab_box}>
            <Tabs 
                selectTab = {(no) => {
                    setActiveIndex(no);
                }}
                tabs={tabs.map((e, i) => {
                    const {contents, ...rest} = e;
                    if(i === activeIndex) {
                        rest.active = true;
                    }
                    return rest;
            })} />
            <TabView contents={tabs[activeIndex].contents} />
        </div>
    );
}

export default TabBox;