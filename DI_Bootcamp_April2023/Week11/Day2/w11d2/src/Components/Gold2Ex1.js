import {useState} from 'react';

const Book = () =>{
    const [data, setData]= useState([{
        title : '',
        author : '',
        genre : '',
        yearpublished: ''

    }])
    const [submitted,setSubmitted]=useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
          ...data,
          [name]: value,
        });
      };

      const handleSubmit = (event) =>{
        event.preventDefault();
        setSubmitted(true);
        console.log(data)
      }

    

    return (
        <>
        {submitted && <p>Data sent ! </p>}
        <h1>New Book</h1>
        <label>Title</label>
        <input type= 'text' name = 'title' onChange={handleChange} /><br></br>
        <label>Author</label>
        <input type= 'text' name = 'author' onChange={handleChange}/><br></br>
        <label>Genre</label>
        <input type= 'text' name = 'genre' onChange={handleChange}/><br></br>
        <label>Year Published</label>
        <input type= 'text' name = 'yearpublished' onChange={handleChange}/><br></br>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Book