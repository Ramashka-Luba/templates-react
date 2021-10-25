import s from "./Checkbox.module.scss";


export const Checkbox = () => {
    return (
        <>
            {/* 1  checkbox при помощи картинок*/}
            <div className={s.wrapper}>
                <h2>checkbox при помощи картинок</h2>
                <label className={s.check}>
                    <input className={s.check__input} type="checkbox" />
                    <sapn className={s.check__box}></sapn>
                    Первый
                </label>
                <label className={s.check}>
                    <input className={s.check__input} checked="checked" type="checkbox" />
                    <sapn className={s.check__box}></sapn>
                    Второй
                </label>
                <label className={s.check}>
                    <input className={s.check__input} disabled type="checkbox" />
                    <sapn className={s.check__box}></sapn>
                    Третий
                </label>
                <label className={s.check}>
                    <input className={s.check__input} checked disabled type="checkbox" />
                    <sapn className={s.check__box}></sapn>
                    Четвертый
                </label>
            </div>

            {/* 2  checkbox при помощи https://yoksel.github.io/url-encoder/ru*/}
            <div className={s.wrapper2}>
                <h2>checkbox при помощи https://yoksel.github.io/url-encoder/ru</h2>
                <label className={s.check2}>
                    <input className={s.check__input2} type="checkbox" />
                    <sapn className={s.check__box2}></sapn>
                    Первый
                </label>
                <label className={s.check2}>
                    <input className={s.check__input2} checked="checked" type="checkbox" />
                    <sapn className={s.check__box2}></sapn>
                    Второй
                </label>
                <label className={s.check2}>
                    <input className={s.check__input2} disabled type="checkbox" />
                    <sapn className={s.check__box2}></sapn>
                    Третий
                </label>
                <label className={s.check2}>
                    <input className={s.check__input2} checked disabled type="checkbox" />
                    <sapn className={s.check__box2}></sapn>
                    Четвертый
                </label>
            </div>


            {/* 3  checkbox при помощи обычного CSS*/}
            <div className={s.wrapper3}>
                <h2>checkbox при помощи обычного CSS</h2>
                <label className={s.check3}>
                    <input className={s.check__input3} type="checkbox" />
                    <sapn className={s.check__box3}></sapn>
                    Первый
                </label>
                <label className={s.check3}>
                    <input className={s.check__input3} checked="checked" type="checkbox" />
                    <sapn className={s.check__box3}></sapn>
                    Второй
                </label>
                <label className={s.check3}>
                    <input className={s.check__input3} disabled type="checkbox" />
                    <sapn className={s.check__box3}></sapn>
                    Третий
                </label>
                <label className={s.check3}>
                    <input className={s.check__input3} checked disabled type="checkbox" />
                    <sapn className={s.check__box3}></sapn>
                    Четвертый
                </label>
            </div>


            {/* 4  checkbox при помощи инлайнового SVG*/}
            <div className={s.wrapper4}>
                <h2>checkbox при помощи инлайнового SVG</h2>
                <label class={s.check4}>
                    <input class={s.check__input4} type="checkbox" />
                    <svg class={s.check__box4} viewBox="0 0 20 20">
                        <rect class={s.check__focus4} width="20" height="20" rx="4" />
                        <rect class={s.check__square4} x="3" y="3" width="14" height="14" rx="2" />
                        <polyline class={s.check__mark4} points="5 9 9 13 15 6" />
                    </svg>
                    Первый
                </label>
                <label class={s.check4}>
                    <input class={s.check__input4} type="checkbox" checked/>
                    <svg class={s.check__box4} viewBox="0 0 20 20">
                        <rect class={s.check__focus4} width="20" height="20" rx="4" />
                        <rect class={s.check__square4} x="3" y="3" width="14" height="14" rx="2" />
                        <polyline class={s.check__mark4} points="5 9 9 13 15 6" />
                    </svg>
                    Второй
                </label>
                <label class={s.check4}>
                    <input class={s.check__input4} type="checkbox" disabled/>
                    <svg class={s.check__box4} viewBox="0 0 20 20">
                        <rect class={s.check__focus4} width="20" height="20" rx="4" />
                        <rect class={s.check__square4} x="3" y="3" width="14" height="14" rx="2" />
                        <polyline class={s.check__mark4} points="5 9 9 13 15 6" />
                    </svg>
                    Третий
                </label>
                <label class={s.check4}>
                    <input class={s.check__input4} type="checkbox" checked disabled/>
                    <svg class={s.check__box4} viewBox="0 0 20 20">
                        <rect class={s.check__focus4} width="20" height="20" rx="4" />
                        <rect class={s.check__square4} x="3" y="3" width="14" height="14" rx="2" />
                        <polyline class={s.check__mark4} points="5 9 9 13 15 6" />
                    </svg>
                    Четвертый
                </label>
            </div>
        </>

    );
}

export default Checkbox;