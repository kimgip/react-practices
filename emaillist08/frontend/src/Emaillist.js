import React from 'react';
import EmailItem from './Email.js';
import {emaillist} from './assets/scss/emaillist.scss';

function Emaillist({emails}) {
    return (
        <ul className={emaillist}>
            {emails.map(e => <EmailItem key={e.no} name={e.name} email={e.email} />)}
        </ul>
    );
}

export default Emaillist;