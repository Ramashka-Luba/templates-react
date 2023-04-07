import React from 'react';
import './App.scss';
import Burger from './components/burger/Burger';
import Button1 from './components/button1/Button1';
import Button2 from './components/button2/Button2';
import Checkbox from './components/checkbox/Checkbox';
import Decor1 from './components/decor1/Decor1';
import { TextSVG } from './components/textSVG/TextSVG';
import Wave from './components/wave/Wave';
import {TextSVG2} from './components/textSVG2/textSVG2';
import { TextSVG3 } from './components/textSVG3/textSVG3';



import IT from "./assets/images/textSVG/IT.jpg"
import { Link1 } from './components/link1/Link1';
import { CarouselItem } from './components/carouselItem/CarouselItem';


const App = () => {
  return (
    <div className="App">
      <Burger />
      <Button1 />
      <Decor1 />
      <Button2 />
      <Checkbox/>
      <Wave/>
      <TextSVG
        viewBox = "0 0 200 200"
        width = {300}
        dx = {67}
        dy = {10}
        text = "Place text here"
        styleText = {{textTransform: "uppercase", fontSize: "14px", letterSpacing: "1px", }}
        src = {IT}
        alt = "img IT"
        styleImg={{ width: "200px", height: "200px" }}
      />
      <TextSVG2/>
      <TextSVG3/>
      <Link1/>
      <CarouselItem/>
    </div>
  );
}

export default App;
