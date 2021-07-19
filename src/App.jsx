import s from './App.module.scss';
import Burger from './components/burger/Burger';
import Button1 from './components/button1/Button1';
import Decor1 from './components/decor1/Decor1';


export const App = () => { 
  return (
    <div className={s.App}>
      <Button1/>
      <Decor1/>
      <Burger/>
    </div>
  );
}

export default App;
