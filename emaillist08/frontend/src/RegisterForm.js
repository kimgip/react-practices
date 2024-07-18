import React from 'react';
import {registerForm, InputFirstName, InputLastName, InputEmail} from './assets/scss/RegisterForm.scss';

function RegisterForm({addEmail}) {
    return (
        <form 
            className={registerForm}
            onSubmit={(e) => {
                e.preventDefault();
                addEmail({
                    firstName: e.target.firstName.value,
                    lastName: e.target.lastName.value,
                    email: e.target.email.value
                })
            }}
        >
            <input type='text' name='firstName' placeholder='성' className={InputFirstName} />
            <input type='text' name='lastName' placeholder='이름' className={InputLastName} />
            <input type='text' name='email' placeholder='이메일' className={InputEmail} />
            <input type='submit' value='등록'/>
        </form>   
    );
}

export default RegisterForm;