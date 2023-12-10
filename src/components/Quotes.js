import  {useState, useEffect} from 'react';
import "./Quotes.css";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }
  return (
    <div className="App">
        <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
        </div><br />
        <button className="btn" onClick={fetchNewQuote}>Quote Of The Day</button>
</div>
  )
}

export default Quotes;
