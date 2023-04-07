import s from "./TextSVG3.module.scss";

export const TextSVG3 = () => {
    return (
        <div className={s.wrapper}>
            <svg width="346" height="346" viewBox="0 0 355 355" > {/* делаем немного больше (height="205") чтобы вместился текст */}
                <defs>  {/*  d - берем из SVG  */}
                    <path id="testPath2" d="M4.13263 210.747C-16.4404 117.725 42.2906 25.6391 135.312 5.06614C228.333 -15.5069 320.419 43.2241 340.992 136.245C361.565 229.267 302.835 321.353 209.813 341.926C116.792 362.499 24.7056 303.768 4.13263 210.747Z" 
                        fill="#FFD338" fill-opacity="0.3" />
                </defs>
                {/* в use записываем стили для вектора вдоль которого текст */}
                <use xlinkHref="#testPath2" // xlinkHref - в реакт, xlink:href - в обычном HTML  
                    fill="none"
                    stroke="#7aa20d"
                    stroke-width="2"
                />
                <text>
                    {/*  startOffset="20%" - велечина смещения текста */}
                    <textPath xlinkHref="#testPath2" startOffset="15%">123456789lace text here Place text here Place text here here Place text herehere Place text herehehere Place text herehere Place text herehere Place text herehere Place text here√√√√here Place text herehere Place text herehere Place text herehere Place text herere Place text here</textPath>
                </text>
            </svg>
        </div>
    );
}

