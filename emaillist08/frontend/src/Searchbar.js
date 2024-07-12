import React from 'react';
import {searchbar} from './assets/scss/Searchbar.scss';

function Searchbar() {
    return (
        <div className={searchbar}>
            <input type='text' placeholder='찾기'/>
        </div>
    );
}

export default Searchbar;