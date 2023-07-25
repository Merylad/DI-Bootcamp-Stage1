import {useState} from 'react';

const WelcomeForm = ()=>{
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
      });
    const [submitted,setSubmitted]=useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData,
          [name]: value,
        });
      };
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        setSubmitted(true);
      }

    const DisplayForm = ()=>{
        return(
        <>  
        <h1>Welcome !</h1>
        <h3>Please provide your information below.</h3>
        <input type='text' placeholder = 'First Name' name = 'firstname' value = {formData.firstname} onChange={handleChange}/><br></br>
        <input type='text' placeholder = 'Last Name' name = 'lastname' value = {formData.lastname} onChange={handleChange}/><br></br>
        <input type='text' placeholder = 'Phone Number' name = 'phone' onChange={handleChange} value = {formData.phone}/><br></br>
        <input type='text' placeholder = 'Email Address' name = 'email' value = {formData.email} onChange={handleChange}/><br></br>
        <button onClick={handleSubmit}>Submit</button>
        
        </>
        )
    }

    const DisplayData = ()=>{
        return(
            <>
            <h3>{formData.lastname}, {formData.firstname}</h3>
            <h3>{formData.phone} | {formData.email}</h3>
            <button onClick={() => setSubmitted(false)}>Reset</button>
            </>
        )
    }

    return(
        <>
        {submitted ? <DisplayData /> : <DisplayForm />}
        
        </>
    )
}



export default WelcomeForm