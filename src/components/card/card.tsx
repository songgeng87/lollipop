"use client"
import clsx from 'clsx';
import Image from 'next/image';
import styles from './card.module.scss';
import { useState } from 'react';

export default function Card({ images, title, content }: { images: string[], title: string | React.ReactNode, content: string }) {
    const [isHover, setIsHover] = useState(false);

    const changeHoverState = (val: boolean) => {
        setIsHover(val);
    }

    return <div onMouseEnter={() => { changeHoverState(true) }} onMouseLeave={() => { changeHoverState(false) }} className={clsx(styles['shadow-inner'], (isHover ? ['p-4','pt-12'] : 'p-6'), "pt-12 w-[295px] h-[420px] justify-items-start border-[#FC15EF] border text-white flex flex-col items-center text-center rounded-3xl bg-transparent transition-transform hover:scale-[1.3] hover:border-[#0AEAF1] hover:bg-[rgba(50,10,140,.4)]")}>
        {
            isHover ? <Image width={72} height={72} src={images[1]} alt="img"></Image> : <Image width={64} height={64} src={images[0]} alt="img"></Image>
        }
        <div className={clsx('mt-8 text-[18px] fn-SebneueSemiBold font-bold', (isHover ? ('text-[28px]') : ''))}>{title}</div>
        <p className={clsx('mt-3 text-[14px] font-ItalianThin font-light', (isHover ? ['text-[16px] font-normal', ''] : 'p-2'))}>
            {content}
        </p>
    </div>
}
