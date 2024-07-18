import React from 'react';
import EmailItem from './Email.js';
import {emaillist} from './assets/scss/emaillist.scss';

function Emaillist({emails}) {
    return (
        <ul className={emaillist}>
            { // emails?(ES6): emails가 null이면 실행안함
                emails?.map(e => <EmailItem key={e.no} no={e.no} firstName={e.firstName} lastName={e.lastName} email={e.email} />)
            }
        </ul>
    );
}

export default Emaillist;