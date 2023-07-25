import {useState} from 'react';
import Informations from './Informations';

const Form = () =>{
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setFormData({ ...formData, [name]: value });
      };
    

    return(
        <>
            <h1 style = {{backgroundColor: 'purple'}}>Sample form</h1>
            <form style = {{backgroundColor: 'pink'}} >
                <input type = 'text' name = 'firstname' placeholder = 'First Name' onChange={(e) => handleChange(e)}  /><br/>
                <input type = 'text' name = 'lastname' placeholder = 'Last Name' onChange={(e) => handleChange(e)} /><br/>
                <input type = 'text' name = 'age' placeholder = 'Age' onChange={(e) => handleChange(e)} /><br/>
                <input type="radio" name="gender" value="Male" onChange={(e) => handleChange(e)} />Male<br/>                  
                <input type="radio" name="gender" value="Female" onChange={(e) => handleChange(e)} />Female<br/>
        
                
                <h6>Select your destination</h6>
                <select name="destination" onChange={(e) => handleChange(e)}>
                    <option value="" disabled selected>--Please Choose a Destination--</option>
                    <option value="Thailand" >Thailand</option>
                    <option value="Japan" >Japan</option>
                    <option value="Bresil"  >Bresil</option>
                </select>
                
                <h6>Dietary restrictions:</h6>
                <input type="checkbox" name="nuts" onChange={(e) => handleChange(e)} />Nuts free<br/>
                <input type="checkbox" name="lactose" onChange={(e) => handleChange(e)} />Lactose free<br/>
                <input type="checkbox" name="vegan" onChange={(e) => handleChange(e)} />Vegan<br/><br/>

                <button>Submit</button>




            </form>

            <Informations form = {formData} />
        
        
        </>
    )
}

export default Form