import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);
    
    const onKeyPressInput = (event) => {
        if(event.key === 'Enter'){
            console.log("keypress:"+event.target.value);
        }
    };

    const onChangeInput = (event) => {
        console.log("change:" + event.target.value);
    }

    const onFocusInput = () => {
        console.log("focus");
    }

    const onBlurInput = () => {
        console.log("blur");
    }

    const onMouseOverImg = (event) => {
        const offsetTop = imgRef.current.offsetTop;
        const offsetLeft = imgRef.current.offsetLeft;

        // console.log("mouseover", `x=${event.clientX}`, `y=${event.clientY}`)
        console.log("mouseover", `x=${event.clientX - offsetLeft}`, `y=${event.clientY - offsetTop}`)
    }

    const onMouseMoveImg = (event) => {
        console.log("mousemove", `x=${event.clientX}`, `y=${event.clientY}`)
    }

    const onMouseOutImg = (evnet) => {
        console.log("mouseout", `x=${event.clientX}`, `y=${event.clientY}`)    
    }

    const onMouseDownImg = (event) => {
        console.log("mousedown", `x=${event.clientX}`, `y=${event.clientY}`)
    }

    const onMouseUpImg = (event) => {
        console.log("mouseup", `x=${event.clientX}`, `y=${event.clientY}`)
    }

    const onClickImg = (event) => {
        console.log("click", `x=${event.clientX}`, `y=${event.clientY}`)
    }

    const onDoubleClickImg = (event) => {
        console.log("dbclick", `x=${event.clientX}`, `y=${event.clientY}`)
    }

    return (
        <>
            <h2>Event Handler  예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={onKeyPressInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput} />
                <br/>
                <br/>
            <img
                ref={imgRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={logo}
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onClickImg} />
        </>
    );
}