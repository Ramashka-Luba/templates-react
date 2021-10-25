import s from "./Wave.module.scss";

export const Wave = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <div className={s.circle}>
                    <span>81%</span>
                </div>
            </div>
        </div>
    );
}

export default Wave;