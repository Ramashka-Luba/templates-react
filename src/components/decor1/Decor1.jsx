import s from "./Decor1.module.scss";
import decor1 from "./../../assets/images/decor/decor1.png";
import decor2 from "./../../assets/images/decor/decor2.png";
import decor3 from "./../../assets/images/decor/decor3.png";
import decor4 from "./../../assets/images/decor/decor4.png";
import decor5 from "./../../assets/images/decor/decor5.png";

export const Decor1 = () => {
    return (
        <div className={s.decor}>
            <img className={s.shape1} src={decor1} alt="shape" />
            <img className={s.shape2} src={decor2} alt="shape" />
            <img className={s.shape1} src={decor3} alt="shape" />
            <img className={s.shape2} src={decor4} alt="shape" />
            <img className={s.shape1} src={decor5} alt="shape" />
        </div>
    );
}

export default Decor1;