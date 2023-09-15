import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getUser();
  }, [])

  //axios function
  async function getUser() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        console.log(response)
        const data = response.data.slip.advice;
        setQuote(data);

      })
      .catch((error) => {
        console.log(error)
      }
      )
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {quote}
        </h1>
        <div >
          <button
            onClick={getUser}
            className="button">
            <span>Get New Quote</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;

