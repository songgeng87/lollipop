"use client"
import clsx from 'clsx';
import Image from 'next/image';
import styles from './card.module.scss';
import { useState } from 'react';

export default function Card({images}: {images: string[]}) {
    const [isHover, setIsHover] = useState(false);

    const changeHoverState = (val: boolean) => {
        setIsHover(val);
    }

    return  <div onMouseEnter={() => {changeHoverState(true)}} onMouseLeave={() => {changeHoverState(false)}} className={clsx(styles['shadow-inner'], (isHover ? ['p-8'] : 'p-12'), "pb-16 border-[#FC15EF] border text-white flex flex-col items-center text-center rounded-3xl bg-transparent transition-transform hover:scale-125 hover:border-[#0AEAF1] hover:bg-[rgba(50,10,140,.4)]")}>
        {
            isHover ? <Image width={96} height={96} src={images[1]} alt="img"></Image> : <Image width={64} height={64} src={images[0]} alt="img"></Image>
        }
        <p className={clsx('mt-8 text-2xl font-bold', (isHover ? ('text-3xl') : '' ))}>SHARED ECONOMY</p>
        <p className={clsx('mt-4', (isHover ? ['text-xl'] : ''))}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, amet. Nisi cup laborum atque deserunt ad eaque dignissimos voluptatum voluptate</p>
    </div>
}