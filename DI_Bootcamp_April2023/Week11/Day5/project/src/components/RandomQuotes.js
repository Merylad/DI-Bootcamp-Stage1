import quotes from './Quotes';
import {useState} from 'react'
import './RandomQuotes.css'


const getObject = () =>{

    //get a random number and make sure it is not the same as the previous one
    let previousIndex = -1;
    let currentIndex;

    do {
        currentIndex = Math.floor(Math.random() * quotes.length);
      } while (currentIndex === previousIndex);

    previousIndex = currentIndex;
    
    //return one randomly object
    return quotes[currentIndex];
}

//get a random color
const pickColor = ()=>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
    return color;
}


const DisplayQuote = () =>{
    // get that random object
    
    const [quoteObj, setQuoteObj ]= useState(getObject())
    const [color, setColor] = useState('blue')
    const [isSliding, setIsSliding] = useState(false);

  

    const handleClick = () =>{
        setQuoteObj(getObject())
        setColor(pickColor())
        setIsSliding(true);
        setTimeout(() => setIsSliding(false), 1000);
        
    }

    document.body.style.backgroundColor = color
    return(
        
        <div className='container '>
            
            <h1 id='quote' style = {{color: color}} className={isSliding ? 'slide-from-top' : ''}> "{quoteObj.quote}" </h1>
            <p id='author' style = {{color: color}} className={isSliding ? 'slide-from-top' : ''}> -{quoteObj.author ? quoteObj.author : 'Unknown'}- </p>
            <button id = 'btn' style = {{backgroundColor: color}} onClick={handleClick}>New quote</button> 

            
        </div>
    )

}

export default DisplayQuote