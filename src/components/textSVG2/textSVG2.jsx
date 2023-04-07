import s from "./TextSVG2.module.scss";

export const TextSVG2 = () => {
    return (
        <div className={s.wrapper}>
            <svg width="543" height="205" viewBox="0 0 543 188"> {/* делаем немного больше (height="205") чтобы вместился текст */}
                <defs>  {/*  d - берем из SVG  */}
                    <path id="testPath1" d="M1.97803 91.28C3.90379 64.3193 28.8534 29.7038 52.7905 16.2392C92.3063 -5.98847 153.643 0.50243 194.291 14.0519C229.559 25.8078 246.209 39.2392 258.059 74.7912C264.066 92.8126 270.086 114.14 279.259 130.82C290.514 151.283 296.626 166.063 320.481 173.219C356.874 184.137 392.418 188.744 430.687 184.492C462.364 180.973 489.766 175.668 509.261 148.991C523.756 129.156 541.061 101.648 541.061 76.1373" />
                </defs>
                {/* в use записываем стили для вектора вдоль которого текст */}
                <use xlinkHref="#testPath1" // xlinkHref - в реакт, xlink:href - в обычном HTML  
                    fill="none"
                    stroke="#7aa20d"
                    stroke-width="2"
                />
                <text>
                    {/*  startOffset="20%" - велечина смещения текста */}
                    <textPath xlinkHref="#testPath1" startOffset="15%">123456789lace text here Place text here Place text here here Place text herehere Place text herehehere Place text herehere Place text herehere Place text herehere Place text here√√√√here Place text herehere Place text herehere Place text herehere Place text herere Place text here</textPath>
                </text>
            </svg>
        </div>
    );
}

