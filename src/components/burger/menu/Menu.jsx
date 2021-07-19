import s from './Menu.module.scss';




export const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className={s.blur} />
            <div className={s.menuContent} onClick={e => e.stopPropagation()}>
                <div className="menuHeader">{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={items.href}>{items.value}</a>
                            <span className={s.materialIcons}>{item.icon}</span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Menu;