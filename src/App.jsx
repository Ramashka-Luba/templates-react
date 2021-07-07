import logo from './logo.svg';
import s from './App.module.scss';

// хз для чего это новезде пишется
import React from "react";

// function App() {        //Старый синтаксис
export const App = () => { //Стрелочная функция
  return (
    <div className={s.App}>
      <header className={s.AppHeader}>
        <img src={logo} className={s.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={s.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Походу в стрелочной функции не должно быть, но без нее не работает
export default App;
