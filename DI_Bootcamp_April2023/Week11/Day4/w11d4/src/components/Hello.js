import {useState, useEffect} from 'react';

const Hello = () =>{
    const [hello, setHello] = useState()
    const [userData, setUserData] = useState()
    const [isSubmit, setSubmit] = useState(false)
    const [serverData, setServerData] = useState('')


    const getData = async () =>{
        const res = await fetch('http://localhost:3030/api/hello');
        const data = await res.text();
        setHello(data);
        setSubmit(true);
    }

    useEffect(()=>{
        getData()
    }, []);

    const handleChange = (e)=>{
        const value = e.target.value
        setUserData(value)

    }

    const handleClick = async() =>{
        const res = await fetch('http://localhost:3030/api/world', {
            method : 'POST',
            headers: {
                'Content-Type': 'text/plain', 
              }, 
            body : userData,
        });
        const data = await res.text()
        setServerData(data)
        
    }

    return(
        <>
        <h1>{hello} </h1>
        <h3>Post to server :</h3>
        <input type='text' onChange = {(e)=>handleChange(e)} />
        <button onClick = {handleClick} >Send to server!</button>
        <p> {serverData} </p>
        </>
        
    )
}

export default Hello