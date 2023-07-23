import {useState} from 'react'
import './Languages.css'

export const Languages = () =>{
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

    const changeVote = (index) =>{
        const updatedLanguages = [...languages]
        updatedLanguages[index]['votes']+=1
        setLanguages(updatedLanguages)
    }

      return (
        <section>
            <h1>Vote your Language !</h1>
            {
                languages.map((item, index)=>{
                    return (
                        <div className="Language" key = {index}>
                        <p>{item.votes}</p>
                        <p>{item.name}</p>
                        <button onClick={() => changeVote(index)}>Vote for me!</button>
                        </div>
                    )
                })
            }
        </section>
    )

       
}



