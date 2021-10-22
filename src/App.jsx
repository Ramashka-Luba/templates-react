import React from 'react';
import './App.scss';
import Burger from './components/burger/Burger';
import Button1 from './components/button1/Button1';
import Button2 from './components/button2/Button2';
import Checkbox from './components/checkbox/Checkbox';
import Decor1 from './components/decor1/Decor1';




const App = () => {
  return (
    <div className="App">
      <Burger />
      <Button1 />
      <Decor1 />
      <Button2 />
      <Checkbox/>

    </div>
  );
}

export default App;
