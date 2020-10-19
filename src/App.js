import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID ='d59b829c'
  const APP_KEY = 'adb5ada24faea25208f644371c34d87a	'
 const exampleReg = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

 const [counter, setCounter] = useState(0);
 
 useEffect(() => {
   console.log('Effect is run')
 });


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
  <button className="search-button" type="submit">Search</button>
       </form>
  <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
