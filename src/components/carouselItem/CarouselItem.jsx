import { Carousel } from "./carousel/Carousel";
import s from "./CarouselItem.module.scss"

export const CarouselItem = () => {
    return (
        <Carousel>
            <div className={`${s.item} ${s.item1}`}>Item 1</div>
            <div className={`${s.item} ${s.item2}`}>Item 2</div>
            <div className={`${s.item} ${s.item3}`}>Item 3</div>
        </Carousel>
    );
}