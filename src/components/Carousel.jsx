import { useState, useRef, useEffect } from 'react';
import image from '../assets/carousel.jpg';

// Data
import data from './data.json';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto bg-[#f5f3f3] shadow-md">
      {/* CAROUSEL HEADING */}
      <div className="carousel__text flex justify-between p-4 font-semibold text-sm">
        <p className="carousel__heading text-[#8e8e8e] cursor-pointer">Related Accounts</p>
        <p className="carousel__heading text-[#189af6] cursor-pointer">See all</p>
      </div>
      {/* CAROUSEL */}
      <div className="relative overflow-hidden pl-8">
        {/* BUTTONS */}
        <div className="flex justify-between absolute top left w-full h-full">
          {/* PREVIOUS BUTTON */}
          <button
            onClick={movePrev}
            className="absolute text-white w-10 text-center opacity-70 hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 bg-gray-400 rounded-full h-fit top-[42%] p-3"
            disabled={isDisabled('prev')}
          >
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          {/* NEXT BUTTON */}
          <button
            onClick={moveNext}
            className=" text-white w-10 text-center hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed z-10 transition-all ease-in-out duration-300 absolute right-[35px] rounded-full h-fit p-3 top-[42%] bg-gray-400 opacity-70"
            disabled={isDisabled('next')}
          >
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
            <span className="sr-only">Next</span>
          </button>

        </div>
        {/* CAROUSEL CARDS */}
        <div
          ref={carousel}
          className="carousel-container relative flex gap-10 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item flex flex-col text-center relative w-64 h-64 snap-start bg-pink-white border border-gray-200 rounded-lg shadow-md px-12 py-3 items-center justify-center bg-white"
              >
                <img className='rounded-full w-16 m-0' src={image} alt="carousel__image" />
                <div className="item__id flex flex-row items-center">
                  <p className="item__id__name font-semibold">suryra.kmar33</p>
                  <img className='item__id__verified w-4 text-sm h-[16px]' src="https://img.icons8.com/color/512/verified-badge.png" alt="verified" />
                </div>
                <p className="item__name text-gray-500">Surya Kmar</p>
                <button className="item__follow mt-4 bg-[#efefef] px-5 py-[6px] text-sm font-semibold rounded-lg hover:bg-[#dedede]">Follow</button>
                <svg className='w-4 h-4 absolute top-[10px] right-[10px]' color='#878889' fill='#878889' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path fill='currentColor' d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
