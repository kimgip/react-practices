import React from 'react';
import {searchbar} from './assets/scss/Searchbar.scss';

function Searchbar({fetchEmails}) {
    return (
        <div className={searchbar}>
            <input type='text' placeholder='찾기' onChange={(e) => fetchEmails(e.target.value)}/>
        </div>
    );
}

export default Searchbar;