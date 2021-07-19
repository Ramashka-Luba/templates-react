import { useState } from 'react';
import s from './Burger.module.scss';
import Menu from './menu/Menu';





export const Burger = () => {

    const [menuActive, setMenuActive] = useState (false)

    const items = [{value:"Главная",href:"/main", icon: "anchor"}, 
                    {value:"Услуги",href:"/service", icon: "api"}, 
                    {value:"Магазин",href:"/shop", icon: "android"}]

    return (
        <div className={s.burger}>
            <nav>
                <div className={s.burgerBtn} onClick = {() => setMenuActive (!menuActive)}>
                    <span/>
                </div>
            </nav>
            <main>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eius ratione magni quisquam quas doloremque dignissimos consequatur placeat voluptas laborum neque omnis aspernatur tempore, soluta nostrum eveniet! Debitis, beatae est.</p>
            </main>
            <Menu header={"Меню"} items={items} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default Burger;
