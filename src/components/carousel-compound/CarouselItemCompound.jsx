// import { Carousel } from "./Carousel";
import s from "./CarouselItemCompound.module.scss"
import {CarouselCompound} from "../carousel-compound/"

export const CarouselItemCompound = () => {
    return (
        <CarouselCompound infinite>
            <CarouselCompound.Page>
                <div className={`${s.item} ${s.item1}`}>Item 1</div>
            </CarouselCompound.Page>

            {/* <CarouselCompound.Page> */}
                <div className={`${s.item} ${s.item2}`}>Item 2</div>
            {/* </CarouselCompound.Page>    */}

            {/* <CarouselCompound.Page> */}
                <div className={`${s.item} ${s.item3}`}>Item 3</div>
            {/* </CarouselCompound.Page>  */}
        </CarouselCompound>


    );
}