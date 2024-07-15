import React from 'react';
import RegisterForm from './RegisterForm.js';
import Searchbar from './Searchbar.js';
import Emaillist from './Emaillist.js';
import './assets/scss/App.scss';

function App() {
    const emails = [
        {no: 1, name: '둘리', email: 'dooly@gmail.com'},
        {no: 2, name: '마이콜', email: 'michol@gmail.com'},
        {no: 3, name: '도우너', email: 'douner@gmail.com'},
        {no: 4, name: '또치', email: 'ddochi@gmail.com'}
    ]

    return (
        <div id={'app'}>
            <RegisterForm />
            <Searchbar />
            <Emaillist emails={emails}/>
        </div>
    );
}

export default App;