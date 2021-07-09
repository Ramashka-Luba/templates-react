import s from "./Button1.module.scss";

export const Button1 = () => {
    return (
        <button className={s.button}>
            <span className= {s.span}>
                DOWNLOAD CV
            </span>
        </button>
    );
}

export default Button1;