import React from 'react';
import {_email} from './assets/scss/Email.scss';

function Email({no, firstName, lastName, email}) {
    return (
        <li className={_email}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' onClick={(e) => {
                e.preventDefault();
                console.log('과제입니다:'+no);
            }}/>
        </li>
    );
}

export default Email;