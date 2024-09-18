"use client"
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './carousel.module.scss';
import clsx from 'clsx';
 
const Carousel = ({ images }: { images: { src: string, alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<number>();
 
  const handleNext = (index: number) => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((index + 1) % images.length);
    timeoutRef.current = Number(setTimeout(handleNext.bind(this, index + 1), 2000)); // 自动播放
  };

  const changeIndex = (index: number) => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex(index % images.length);
    timeoutRef.current = Number(setTimeout(handleNext.bind(this, index), 2000)); // 自动播放
  }

//   const handleBefore = () => {
//     clearTimeout(timeoutRef.current);
//     if(currentIndex - 1 < 0){
//         setCurrentIndex(images.length - 1)
//     }else{
//         setCurrentIndex((currentIndex - 1) % images.length);
//     }
//     timeoutRef.current = Number(setTimeout(handleNext.bind(this, currentIndex - 1), 2000)); // 自动播放
//   };
 
  useEffect(() => {
    timeoutRef.current = Number(setTimeout(handleNext.bind(this, currentIndex), 2000));
    return () => clearTimeout(timeoutRef.current);
  }, []);
 
  return (
    <>
        <div className={clsx(styles.carousel, "rounded-2xl carousel w-1/2 flex flex-col justify-center")}>
        {/* <button className='text-white text-xl font-bold absolute left-8 top-1/2' onClick={handleBefore}>{"<"}</button> */}
        {images.length > 0 && (
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className='h-[600px]'/>
        )}
        <ul className='flex justify-center gap-4 mt-4'>
            <li className={clsx('w-4 h-4 bg-white rounded-full cursor-pointer',(currentIndex === 0 ? ['bg-black'] : ''))} onClick={() => {changeIndex(0)}}></li>
            <li className={clsx('w-4 h-4 bg-white rounded-full cursor-pointer', (currentIndex === 1 ? ['bg-black'] : ''))} onClick={() => {changeIndex(1)}}></li>
            <li className={clsx('w-4 h-4 bg-white rounded-full cursor-pointer',(currentIndex === 2 ? ['bg-black'] : ''))} onClick={() => {changeIndex(2)}}></li>
        </ul>
        {/* <button className='text-white text-xl font-bold absolute right-8 top-1/2' onClick={() => handleNext(currentIndex)}>{">"}</button> */}
        </div>
        {
            currentIndex === 0 && <div className="text-white text-2xl w-1/2">
                We proposed integration a Sparse Merkle Tree [SMT] into the Solana Client to serve as a global state tree for network extensions.
            </div>
        }
        {
            currentIndex === 1 && <div className="text-white text-2xl w-1/2">
                The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
            </div>
        }
        {
            currentIndex === 2 && <div className="text-white text-2xl w-1/2">
                The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
            </div>
        }
    </>
  );
};
 
Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
 
export default Carousel;
