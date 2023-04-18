// import { useEffect, useState, Children, cloneElement } from "react";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; //библиотека иконок
// import { CarouselContext } from "./carousel-context";
// import { Page } from "./page/Page";

// import s from "./Carousel.module.scss"


// const PAGE_WIDTH = 450 //переменная для ширины окна

// export const Carousel = ({children}) => {

//     const [pages, setPages] = useState([]);
//     const [offset, setOffset] = useState(0) //0 - изначальная ширина окна


//     const handleLeftClick = () => {  // клик на стрелочки право/лево
//         console.log("handleLeftClick");

//         setOffset((currentOffset) => { //перелистываем страницу
//             const newOffset = currentOffset + PAGE_WIDTH
    
//             console.log(newOffset);
//             return Math.min(newOffset, 0)
//         })
//     }



//     const handleRightClick = () => {
//         console.log("handleRightClick");

//         setOffset((currentOffset) => { //перелистываем страницу
//             const newOffset = currentOffset - PAGE_WIDTH
    
//             const maxOffset = -(PAGE_WIDTH * (pages.length-1))

//             console.log(newOffset, maxOffset);
//             return Math.max(newOffset, maxOffset)  
//         })
//     }

//     // useEffect (() => {
//     //     setPages(
//     //         Children.map(children, (child) => {
//     //             return cloneElement(child, {
//     //                 style: {
//     //                     height: '100%',
//     //                     minWidth: `${PAGE_WIDTH}px`, //используем переменную для ширины окна
//     //                     maxWidth: `${PAGE_WIDTH}px`,
//     //                 },
//     //             })

//     //         })
//     //     )
//     // }, [])


//     return (
//         <CarouselContext.Provider value={{ width: PAGE_WIDTH}}>
//         <div className={s.mainContainer}>
//              <FaChevronLeft className={s.arrow} onClick={handleLeftClick}/>   {/*стрелочка влево */}
//             <div className={s.window}>
//                 <div className={s.allPagesContainer} 
//                     style = {{ transform: `translateX(${offset}px)`}} //прокрутка страниц
//                 >
//                     {pages}
//                 </div>
//             </div>
//             <FaChevronRight className={s.arrow} onClick={handleRightClick}/>  {/*стрелочка влево */}
//         </div>
//         </CarouselContext.Provider>
//     );
// }

// Carousel.Page = Page

// //видео на youtube:
// // https://www.youtube.com/watch?v=LmSH_Nr0ryE&ab_channel=%D0%92%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-DevMagazine



import { useEffect, useRef, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Page from './Page'
import { CarouselContext } from './carousel-context'
import './Carousel.css'

const TRANSITION_DURATION = 300

export const Carousel = ({ children, infinite }) => {
  const [offset, setOffset] = useState(0)
  const [width, setWidth] = useState(450)
  const [pages, setPages] = useState([])
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
  const [transitionDuration, setTransitionDuration] = useState(300)

  const windowElRef = useRef()

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]), // head: 1
        ...children,
        cloneElement(children[0]), // tail: 1
      ])
      setClonesCount({ head: 1, tail: 1 })
      return
    }
    setPages(children)
  }, [children, infinite])

  useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth
      console.log('resized', windowElWidth)
      setWidth(windowElWidth)
      setOffset(-(clonesCount.head * width)) // to prevent wrong offset
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [clonesCount, width])

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION)
      }, TRANSITION_DURATION)
    }
  }, [transitionDuration])

  useEffect(() => {
    if (!infinite) return

    // с элемента 0 (clone) -> к предпоследнему (реальный)
    if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
      }, TRANSITION_DURATION)
      return
    }
    // с элемента n (clone) -> к элементу 1 (реальный)
    if (offset === -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0)
        setOffset(-(clonesCount.head * width))
      }, TRANSITION_DURATION)
      return
    }
  }, [offset, infinite, pages, clonesCount, width])

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width
      const maxOffset = -(width * (pages.length - 1))
      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className="main-container">
        <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
        <div className="window" ref={windowElRef}>
          <div
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }}
          >
            {pages}
          </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.Page = Page
