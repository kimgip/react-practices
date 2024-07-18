import React from 'react';
import {_email} from './assets/scss/Email.scss';

function Email({no, firstName, lastName, email, deleteEmail}) {
    return (
        <li className={_email}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' onClick={(e) => {
                e.preventDefault();
                deleteEmail(no);
            }}/>
        </li>
    );
}

export default Email;