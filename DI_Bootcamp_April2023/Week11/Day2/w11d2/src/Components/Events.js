import {useState} from 'react'

const clickMe = () =>{
    alert ('I was clicked')
}

const handleKeyDown = (e) =>{
    const value = e.target.value
    const keyCode = e.keyCode
    if (keyCode ===13){
        alert (`The Enter key was pressed, your input is ${value}`)
    }
}




export const Events = () =>{
    const [isToggleOn , setisToggleOn ] = useState(true)

    const changeToggle = () =>{
        if (isToggleOn === true){
            setisToggleOn(false)
        } else {
            setisToggleOn(true)
        }
    }

    return (
        <>
        <button onClick = {clickMe}>Click me!</button>
        <input type = 'text' onKeyDown = {handleKeyDown}/>
        <p>Exercise 9:</p>
        <button onClick = {changeToggle}>{
            isToggleOn ? <p>ON </p>: <p>OFF</p>
            }</button>
        </>
    )
}