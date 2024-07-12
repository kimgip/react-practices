import React from 'react';
import {_email} from './assets/scss/Email.scss';

function Email({name, email}) {
    return (
        <li className={_email}>
            {name}
            <br/>
            {email}
        </li>
    );
}

export default Email;