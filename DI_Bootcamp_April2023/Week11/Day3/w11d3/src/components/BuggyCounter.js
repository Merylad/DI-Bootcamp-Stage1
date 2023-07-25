import {useState} from 'react';


const BuggyCounter = () =>{
    const [count, setCount] = useState(0)
    if (count>5) {
        throw new Error ('Crashed...')
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick = {()=>setCount(count +1)}>Add</button>

        </>
    )
};

export default BuggyCounter;