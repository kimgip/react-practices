import React from 'react';

export default function Guestbook() {
    return (
        <div>
            <h1>Guestbook</h1>
            <ul>
                <a href='/' onClick={(e)=>{
                    e.preventDefault();
                    history.pushState();
                }}>메인</a>
            </ul>
        </div>
    );
}