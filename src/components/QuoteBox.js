import React, {useState} from 'react';
import quotes from '../json/quotes.json'
import ButtonCard from './ButtonCard';
import '../styles/quoteStyle.css'

const QuoteBox = () => {
    const colors = ['#1A0E5A', '#FFD8BE', '#FCBA04', '#A50104', '#BB4430', '#262322', '#4B2E39', '#0D0221', '#104547', '#e493ff','#ff83b2','#ffc96b','#e1ff96','#70ffff' ]
   
    const colorRandom = () =>{
        return Math.floor(Math.random() * colors.length)       
    }
     
             
    const   quoteRandom = () =>{
      return Math.floor(Math.random() * quotes.length)      
    }

    const [randomQuotes,setRandomQuotes] = useState(quotes[quoteRandom()])   
    const [randomColor,setrandomColor] =useState(colors[colorRandom()])

    const clickRandom = () =>{
        setrandomColor(colors[colorRandom()])
        setRandomQuotes(quotes[quoteRandom()])
    }

   console.log(randomQuotes)
    document.body.style.backgroundColor=randomColor
    return (
        <div style = {{color: randomColor }} className='card'>
            <h1>&#8220;</h1>
            <p>
                {randomQuotes.quote}
            </p>
            <h3 className='autor'>{randomQuotes.author} {quotes.author}</h3>
            <ButtonCard clickRandom ={clickRandom} randomColor={randomColor}/>
        </div>
    );
};

export default QuoteBox;