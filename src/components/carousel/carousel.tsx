"use client"
import React, {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './carousel.module.scss';
import clsx from 'clsx';

const Carousel = forwardRef(({images}: { images: { src: string, alt: string, width: number, height: number }[] }, ref: any) => {
    useImperativeHandle(ref, () => ({
        handleScroll
    }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const timeoutRef = useRef<number>();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true); // 鼠标进入时设置状态为 true
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // 鼠标离开时设置状态为 false
    };

    // const changeIndex = (index: number) => {
    //     clearTimeout(timeoutRef.current);
    //     setCurrentIndex(index % images.length);
    //     timeoutRef.current = Number(setTimeout(handleNext.bind(this, index), 2000)); // 自动播放
    // }

    let isScrolling:any;
    const handleScroll = (event: WheelEvent) => {
        if (isHovered) {
            event.preventDefault()
            clearTimeout(isScrolling);
            // 获取当前滚动位置
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // 设置一个新的计时器，当滚动停止 200 毫秒后执行代码
            isScrolling = setTimeout(function () {
                if (scrollTop > lastScrollTop) {
                    // 向下滚动
                    let number = currentIndex + 1
                    if (number > 2) {
                        number = 0
                    }
                    setCurrentIndex(number)
                } else {
                    // 向上滚动
                    let number = currentIndex - 1
                    if (number < 0) {
                        number = 2
                    }
                    setCurrentIndex(number)
                }
                setLastScrollTop(scrollTop) // 更新上次滚动位置
            }, 200);
        }
    };

    return (
        <div onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             className={clsx(styles.carouselContainer, "flex justify-center items-center gap-10")}>
            <div className={clsx(styles.carousel, "rounded-2xl carousel min-w-1/2 flex flex-col justify-center")}>
                {/* <button className='text-white text-xl font-bold absolute left-8 top-1/2' onClick={handleBefore}>{"<"}</button> */}
                {images.length > 0 && (
                    <Image width={images[currentIndex].width} height={images[currentIndex].height}
                           src={images[currentIndex].src} alt={images[currentIndex].alt}></Image>
                    // <img src={images[currentIndex].src} alt={images[currentIndex].alt} className='h-[600px]' />
                )}
                {/* <button className='text-white text-xl font-bold absolute right-8 top-1/2' onClick={() => handleNext(currentIndex)}>{">"}</button> */}
            </div>
            {
                currentIndex === 0 && <div className="text-white text-2xl w-[520px] flex items-center justify-center">
                    <Image className='mr-8' width={30} height={184} src="/images/progress-top.png"
                           alt="progress-top"></Image>
                    <div>
                        <p className='pb-6 text-[36px] leading-tight fn-SebneueSemiBold font-bold'>USE SMT FOR SECURED
                            SETTLEMENT
                            PROTOCOLS</p>
                        <p className=' font-ItalianRegular text-[22px]'>
                            Lollipop is the first that has developed the complete Cryptographic Settlement Protocol for
                            Solana Network Extension.
                        </p>
                    </div>
                </div>
            }
            {
                currentIndex === 1 && <div className="text-white text-2xl w-[520px] flex items-center justify-center">
                    <Image className='mr-8' width={30} height={314} src="/images/progress-center.png"
                           alt="progress-center"></Image>
                    <div>
                        <p className='pb-6 text-[36px] leading-tight fn-SebneueSemiBold font-bold'>SOLANA-NATIVE &
                            ENHANCED
                            DECENTRALIZATION</p>
                        <p className=' font-ItalianRegular font-normal text-[22px]'>
                            Execution Node built with Solana native architecture, ensuring NEs are aligned with
                            Solana&apos;s transaction data structure.
                            Shared Sequencer, Stateless Validator & DA deployed on JAM chain to provide trustless ground
                            for NEs&apos; high TVL.
                        </p>
                    </div>
                </div>
            }
            {
                currentIndex === 2 && <div className="text-white text-2xl w-[520px] flex items-center justify-center">
                    <Image className='mr-8' width={30} height={190} src="/images/progress-bottom.png"
                           alt="progress-bottom"></Image>
                    <div>
                        <p className='pb-6 text-[36px] leading-tight fn-SebneueSemiBold font-bold'>ENTER NETWORK
                            EXTENSIONS</p>
                        <p className=' font-ItalianRegular text-[22px]'>Value never leaves an L1 for an NES, only data
                            and
                            compute.
                            NES allows for code to be written one time, and deployed anywhere</p>

                    </div>
                </div>
            }
        </div>
    )
})

// Carousel.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string.isRequired,
//       alt: PropTypes.string,
//     })
//   ).isRequired,
// };

export default Carousel;
