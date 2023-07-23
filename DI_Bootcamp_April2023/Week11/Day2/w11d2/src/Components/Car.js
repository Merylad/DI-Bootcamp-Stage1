import {useState} from 'react'


// export const Car = (props)=>{
//     const [color, setColor] = useState('red')
//     const {name, model} = props.info
//     return(
//         <>
//         <h3>This car is a {model} {name} </h3>
//         <h4>It is a {color} car </h4>
//         </>
//     )
// }

export const Car = (props)=>{
    return(
        <>
        <h3>Who lives in my {props.GarageSize} garage ? </h3>
        </>
    )
}