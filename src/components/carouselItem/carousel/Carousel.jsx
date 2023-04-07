import { useEffect, useState, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; //библиотека иконок
import s from "./Carousel.module.scss"


const PAGE_WIDTH = 450 //переменная для ширины окна

export const Carousel = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0) //0 - изначальная ширина окна


    const handleLeftClick = () => {  // клик на стрелочки право/лево
        console.log("handleLeftClick");

        setOffset((currentOffset) => { //перелистываем страницу
            const newOffset = currentOffset + PAGE_WIDTH
    
            console.log(newOffset);
            return Math.min(newOffset, 0)
        })
    }



    const handleRightClick = () => {
        console.log("handleRightClick");

        setOffset((currentOffset) => { //перелистываем страницу
            const newOffset = currentOffset - PAGE_WIDTH
    
            const maxOffset = -(PAGE_WIDTH * (pages.length-1))

            console.log(newOffset, maxOffset);
            return Math.max(newOffset, maxOffset)  
        })
    }

   

    
    useEffect (() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`, //используем переменную для ширины окна
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })

            })
        )
    }, [])

    return (
        <div className={s.mainContainer}>
            <FaChevronLeft className={s.arrow} onClick={handleLeftClick}/>
            <div className={s.window}>
                <div className={s.allPagesContainer} 
                    style = {{ transform: `translateX(${offset}px)`}} //прокрутка страниц
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className={s.arrow} onClick={handleRightClick}/>
        </div>
    );
}

//видео на youtube:
//https://www.youtube.com/watch?v=C5NjxM1dyxY&ab_channel=%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-DevMagazine