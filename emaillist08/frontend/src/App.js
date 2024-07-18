import React, { useEffect, useState } from 'react';
import RegisterForm from './RegisterForm.js';
import Searchbar from './Searchbar.js';
import Emaillist from './Emaillist.js';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {   
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setEmails([json.data, ...emails]);

        } catch(err) {
            console.error(err);
        }
    };
    
    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kwd=${keyword ? keyword : ''}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setEmails(json.data);

        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchEmails();
    }, []);
    
    return (
        <div id={'app'}>
            <RegisterForm addEmail={addEmail}/>
            <Searchbar fetchEmails={fetchEmails}/>
            <Emaillist emails={emails}/>
        </div>
    );
}

export default App;