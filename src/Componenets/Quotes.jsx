import axios from "axios"
import { useState, useEffect } from "react"

export default function Quotes(){
    const [quotesList, setQuotesList] = useState([]);
    const [ currentQuotes, setCurrentQuotes] = useState({ text:"", author:""});

    useEffect(() => {
        axios.get("https://dummyjson.com/quotes").then(res => {
            setQuotesList(res.data.quotes);
            getRandomQuote(res.data.quotes);
        });
    },[]);

    const getRandomQuote = ( QuotesArray = quotesList) => {
        const randomIndex = Math.floor(Math.random() * QuotesArray.length);
        const randomQuote = QuotesArray[randomIndex];
        setCurrentQuotes({text: randomQuote.quote, author:randomQuote.author});
    }

    const handleCopyQuote = (e) => {
        e.stopPropagation();
        if(!currentQuotes) return;
        const textToCopy = `"${currentQuotes.text}" - ${currentQuotes.author}`;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(()=> setCopied(false),1000);        
    }


    return(
<div className="relative min-h-screen w-full bg-[url('/bg1.webp')] bg-cover bg-center flex flex-col items-center justify-center">
  
  {/* Gradient Circle Overlay */}
  <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-b from-black/80 to-white/50 flex flex-col items-center justify-center p-8 text-center shadow-xl">
    
    {/* Quote */}
    <p className="text-2xl font-semibold text-white drop-shadow-lg">
      "{currentQuotes.text}"
    </p>

    {/* Author */}
    <span className="mt-3 text-lg text-gray-200 italic">
      — {currentQuotes.author}
    </span>
  </div>

  {/* Buttons under circle */}
  <div className="mt-6 flex gap-4">
    {/* Regenerate */}
    <button onClick={() => getRandomQuote()} className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium shadow-lg hover:bg-white/30 transition">
      🔄 Regenerate
    </button>
    
    {/* Copy */}
    <button onClick={handleCopyQuote} className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-white font-medium shadow-lg hover:bg-white/30 transition">
      📋 Copy
    </button>
  </div>
</div>





    )
}