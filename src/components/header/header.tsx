"use client"
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './header.module.scss';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [src1, setSrc1] = useState('/images/Twitter.png');
    const [src2, setSrc2] = useState('/images/Telegram.png');
    const [showMenu, setShowMenu] = useState(false);


    const updateScrollState = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollState);
        return () => {
            window.removeEventListener('scroll', updateScrollState);
        }
    }, [])

    return <div
        className={clsx((scrolled ? '' : ''), 'h-[80px] flex justify-between items-center bg-[#320A8C] border-b border-[#5B3BA3] fixed left-0 top-0 w-screen z-10')}>
        <ul className="menu-horizontal rounded-box px-16 bg-[#320A8C] text-white gap-16 flex-nowrap font-SebneueSemiBold font-semibold">
            <li className='hover:cursor-pointer hover:text-[#0AEAF1] active:text-black visited:text-black text-[14px] '>
                <Link href="/home">Home</Link></li>
            <li className='hover:cursor-pointer hover:text-[#0AEAF1] active:text-black visited:text-black text-[14px] '>
                <Link href="/about">About</Link></li>
            <li className='relative hover:cursor-pointer  flex items-center justify-center'>
                <span className='hover:text-[#0AEAF1] text-[14px]'
                      onMouseEnter={() => setShowMenu(true)}>Builders</span>
                <Image className='ml-2' width={13} height={7} src="/images/arrow-down.png" alt="arrow-down"/>
                {showMenu && <ul style={{width:108,height:102}}
                                 className={clsx(styles['menu-ul'], 'text-[14px] text-[rgba(255,255,255,0.8)] bg-[rgba(50,10,140,1)] absolute left-[-15px] top-[30px] border border-[#0AEAF1] rounded-[10px] p-4 font-ItalianRegular font-normal')}>
                    <li className='hover:text-[#0AEAF1]' onClick={() => setShowMenu(false)}>Whitepaper</li>
                    <li className='hover:text-[#0AEAF1] mt-1' onClick={() => setShowMenu(false)}>Lite Paper</li>
                    <li className='hover:text-[#0AEAF1] mt-1' onClick={() => setShowMenu(false)}>Doc</li>
                </ul>}
            </li>
        </ul>
        <div className='flex items-center ml-[-192px]'>
            <Image width={scrolled ? 54 : 168} height={54} src={scrolled ? '/images/Logomark.png' : '/images/logo.png'}
                   alt="logo"/>
        </div>
        <div className='flex items-center mr-16'>

            <Link href="https://x.com/LollipopHQ" target="_blank">
                <Image width={36} height={36} src={src1}
                       onMouseEnter={() => setSrc1('/images/Twitter-click.png')}
                       onMouseLeave={() => setSrc1('/images/Twitter.png')}
                       alt="twitter"/>
            </Link>
            <Image className='ml-6' width={36} height={36}
                   src={src2}
                   onMouseEnter={() => setSrc2('/images/Telegram-click.png')}
                   onMouseLeave={() => setSrc2('/images/Telegram.png')}
                   alt="telegram"/>

        </div>
    </div>
}
