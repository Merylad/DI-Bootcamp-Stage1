import {useState, useEffect} from 'react'

export const Color = () =>{
    const [favoriteColor  , setFavoriteColor] = useState('red')
    useEffect( ()=>{
        alert('useEffect reached')
        setFavoriteColor('Yellow')
    })

    const changeColor= ()=>{
        setFavoriteColor('blue')
    }

    return (
        <>
        <h1>My favorite color is <i> {favoriteColor}</i></h1>
        <button onClick = {changeColor}>Change color!</button>
        </>
    )
}