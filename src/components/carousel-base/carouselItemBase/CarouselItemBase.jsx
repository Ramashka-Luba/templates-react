import { CarouselBase } from "./../carouselBase/CarouselBase";
import s from "./CarouselItemBase.module.scss"

export const CarouselItemBase = () => {
    return (
        <CarouselBase>
            <div className={`${s.item} ${s.item1}`}>Item 1</div>
            <div className={`${s.item} ${s.item2}`}>Item 2</div>
            <div className={`${s.item} ${s.item3}`}>Item 3</div>
        </CarouselBase>
    );
}