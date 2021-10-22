import s from "./Button1.module.scss";

export const Button1 = () => {
    return (
        <div className={s.wrapper}>
            <button className={s.button}>
                <span className={s.span}>
                    DOWNLOAD CV
                </span>
            </button>
        </div>
    );
}

export default Button1;