import React from 'react';

function TitleBar02() {
    const onClickHandler = () => {
        console.log('TitleBar02: clicked!')
    }


    return (
        <div>
            <h4 onClick={onClickHandler}>
                Function Handler in Function Component(click here!)
            </h4>
        </div>
    )
}

export default TitleBar02;