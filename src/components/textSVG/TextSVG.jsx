import s from "./TextSVG.module.scss";


export const TextSVG = ({ viewBox, width, text, dx, dy, styleText, src, alt, styleImg }) => {
    return (
        <div className={s.wrapper}>

            <svg
                viewBox={viewBox}
                width={width}
            >
                {/* фигура вокруг нее текст(тут круг, внутри текст, как не знаю не знаю. Обычно текст над кругом) */}
                <defs>
                    <path id="testPath" d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0" //сюда мы прописываем фигуру относительно какой выравнивается текст
                        fill="#FFD338" fill-opacity="0.3" // фон фигуры
                    />
                </defs>

                {/* обводка фигуры */}
                <use xlinkHref="#testPath" // тут задаем обводку чисто для того чтобы было видно
                    fill="none"
                    stroke="#7aa20d"
                    stroke-width="2"
                />
                <text dx={dx} // dx - отступ по х или startOffset - задает процент отступа текта
                    dy={dy}> {/* d н - отступ по y */}

                    {/* text */}
                    <textPath xlinkHref="#testPath"
                        style={styleText}>
                        {text}
                    </textPath>
                </text>
            </svg>

            {/* картитнка */}
            <div className={s.wrapImg}>
                <img className={s.img} src={src} alt={alt} style={styleImg} />
            </div>
        </div>
    );
}
