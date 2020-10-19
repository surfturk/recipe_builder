import React from 'react';

import './App.css';

const App = () => {

  const APP_ID ='d59b829c'
  const APP_KEY = 'adb5ada24faea25208f644371c34d87a	'

  const exampleReg = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"

  return (
    <div className="App">
      <h1>Hello mortal!</h1>
    </div>
  );
}

export default App;
