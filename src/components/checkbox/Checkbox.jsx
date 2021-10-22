import s from "./Checkbox.module.scss";


export const Checkbox = () => {
    return (
        <div className={s.wrapper}>
            <input type="checkbox" id="checkbox_1"/>
            <label for="checkbox_1">Coukfcty</label>
        </div>
    );
}

export default Checkbox;