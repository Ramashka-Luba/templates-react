import s from "./Button2.module.scss";


export const Button2 = () => {
    return (
        <div className={s.wrapper}>
            <button className={s.button}>
                DOWNLOAD CV
            </button>
        </div>
    );
}

export default Button2;