import React, { useEffect, useState } from 'react'
import { ArrowForwardIos, ArrowBackIos } from '@styled-icons/material-outlined/';

import * as Styles from './styles.js';
import IconWithStyles from '../IconWithStyles.js';

const Carousel = (props) => {
  const {children, show, infiniteLoop, auto } = props
  
  const slides = children? children : [];

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
  const [length, setLength] = useState(slides.length)
  
  const [isRepeating, setIsRepeating] = useState(infiniteLoop && slides.length > show)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState(null)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(slides.length)
    setIsRepeating(infiniteLoop && slides.length > show)
  }, [slides, infiniteLoop, show])

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
          setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  const next = () => {
    if (isRepeating || currentIndex < (length - show)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if(touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  const renderExtraPrev = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(slides[length - 1 - index])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    let output = []
    for (let index = 0; index < show; index++) {
      output.push(slides[index])
    }
    return output
  }

  useEffect(()=>{
    let interval;
    if(auto){
      interval = setInterval(next, 3000);
    }

    return ()=> clearInterval(interval);
  })


  return (
    <Styles.CarouselContainer>
      <Styles.CarouselWrapper>
        {
          (isRepeating || currentIndex > 0) &&
          <button onClick={prev} className="left-arrow">
            {IconWithStyles(ArrowBackIos)}
          </button>
        }
        <Styles.CcarouselContentWrapper
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Styles.CarouselContent
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {
                (length > show && isRepeating) &&
                renderExtraPrev()
            }
            {slides}
            {
                (length > show && isRepeating) &&
                renderExtraNext()
            }
          </Styles.CarouselContent>
        </Styles.CcarouselContentWrapper>
        {
          (isRepeating || currentIndex < (length - show)) &&
          <button onClick={next} className="right-arrow">
             {IconWithStyles(ArrowForwardIos)}
          </button>
        }
      </Styles.CarouselWrapper>
    </Styles.CarouselContainer>
  )
}

export default Carousel