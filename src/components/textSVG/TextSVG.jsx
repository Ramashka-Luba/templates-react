import s from "./TextSVG.module.css";

export const TextSVG = ({text, src, alt, dx}) => {
    return (
        <div className={s.wrapper}>

                <svg className={s.wrapSVG} xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" viewBox="0 0 200 200">
                    <path d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0" id="textPath" margin="100" />
                    <text dx={dx} >
                        <textPath xlinkHref="#textPath">{text}</textPath>
                    </text>
                </svg>

            <div className={s.wrapImg}>
                <img className={s.img} src={src} alt={alt} />
            </div>

        </div>
    );
}

export default TextSVG;