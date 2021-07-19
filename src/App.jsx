import React from 'react';
import  './App.scss';
import Burger from './components/burger/Burger';
import Button1 from './components/button1/Button1';
import Decor1 from './components/decor1/Decor1';



const App = () => { 
  return (
    <div className="App">
      {/* <Button1/>
      <Decor1/> */}
      <Burger/>
    </div>
  );
}

export default App;
