const WebHook = () =>{
    const objToSend = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
    }

    const sendData = async()=>{
        const res = await fetch ('https://webhook.site/e4dc2a2e-e15e-4984-969d-3af1f0312586', {
            method : 'POST',
            headers: {'content-type': 'application/json'},
            body : JSON.stringify(objToSend)
        })
    }

    return(
        <>
            <button onClick = {sendData}>Click to POST</button>
        </>
    )

}

export default WebHook