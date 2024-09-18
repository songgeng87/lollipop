"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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

    return <div className={clsx((scrolled ? ['opacity-60'] : ''), 'h-[80px] flex justify-between items-center bg-[#320A8C] border-b border-white fixed left-0 top-0 w-screen z-10')}>
        <ul className="menu-horizontal rounded-box px-16 bg-[#320A8C] text-white gap-16 flex-nowrap">
            <li className='hover:cursor-pointer active:text-black visited:text-black text-[16px] '><Link href="/home">Home</Link></li>
            <li className='hover:cursor-pointer active:text-black visited:text-black text-[16px] '><Link href="/about">About</Link></li>
            <li className='hover:cursor-pointer active:text-black visited:text-black text-[16px] '> Builders</li>
        </ul>
        <div className='flex items-center ml-[-192px]'>
            <Image width={128} height={42} src="/images/logo.png" alt="logo" />
        </div>
        <div className='flex items-center mr-16'>
          
                <Link href="https://x.com/LollipopHQ" target="_blank">
                <Image width={36} height={36} src="/images/Twitter.png" alt="twitter" />
                </Link>
                <Image className='ml-6' width={36} height={36} src="/images/Telegram.png" alt="telegram" />

        </div>
    </div>
}