import Link from "next/link";
import Image from "next/image";
import styles from './footer.module.scss';
import {useState} from "react";
import clsx from "clsx";

export default function Footer() {
    const [src1, setSrc1] = useState('/images/Twitter.png');
    const [src2, setSrc2] = useState('/images/DC.png');
    const [src3, setSrc3] = useState('/images/Telegram.png');
    const [src4, setSrc4] = useState('/images/GitHub.png');
    const [src5, setSrc5] = useState('/images/Link.png');

    return <footer className="mt-[-15px] py-24 bg-[#320A8C] px-16 pt-24 rounded-t-3xl border border-b-[24px] border-[#FC15EF]">
        <div className="flex">
            <div className="flex gap-24 w-1/2">
                <div className="text-white text-[14px] flex flex-col  font-SebneueSemiBold font-semibold">
                    <Link href="/" className=' hover:text-[#0AEAF1]'>Home</Link>
                    <Link href="/" className=" mt-4 hover:text-[#0AEAF1]">About</Link>
                </div>
                <div className="text-white flex flex-col">
                    <Link href="/"
                          className='font-SebneueSemiBold font-semibold text-[14px] hover:text-[#0AEAF1]'>Builders</Link>
                    <Link href="https://arxiv.org/abs/2405.08882"
                          className="mt-5 text-[12px] text-[rgba(255,255,255,0.8)] hover:text-[#0AEAF1] font-ItalianRegular font-normal">Research
                        Paper</Link>
                    <Link href="/"
                          className="mt-2 text-[12px] text-[rgba(255,255,255,0.8)] hover:text-[#0AEAF1] font-ItalianRegular font-normal">Lite
                        Paper</Link>
                    <Link href="/"
                          className="mt-2 text-[12px] text-[rgba(255,255,255,0.8)] hover:text-[#0AEAF1] font-ItalianRegular font-normal">Doc</Link>
                </div>
            </div>
            <div className="flex items-center grow gap-4">
                <input type="text" placeholder="Enter your email"
                       className={clsx(styles['search-input'], "text-[12px] font-ItalianRegular font-light grow input input-bordered placeholder:text-white rounded-full border-[rgba(255,255,255,0.4)] bg-[#320A8C] text-white")}/>
                <button
                    className={clsx(styles['search-btn'], "w-[140px] h-[50px] border-[#FC15EF] border  rounded-full text-white px-8 py-3 cursor-pointer active:opacity-80 text-[14px] font-ItalianDemibold font-bold")}>Subcribe
                </button>
            </div>
        </div>
        <div className="mt-16">
            <div className="flex gap-4 text-2xl items-center">
                <Image width={168} height={42} src="/images/logo.png" alt="logo"/>
            </div>
            <div className="mt-8 flex justify-between items-center">
                <div className="flex gap-x-16 items-center">
                    <p className="text-[14px] text-[rgba(255,255,255)] font-ItalianLight ">Find us on</p>
                    <Link href="https://x.com/LollipopHQ" target="_blank">
                        <Image width={32} height={32}
                               src={src1}
                               onMouseEnter={() => setSrc1('/images/Twitter-click.png')}
                               onMouseLeave={() => setSrc1('/images/Twitter.png')} alt="twitter"/>
                    </Link>
                    <Image width={32} height={32} src={src2}
                           onMouseEnter={() => setSrc2('/images/DC-click.png')}
                           onMouseLeave={() => setSrc2('/images/DC.png')} alt="dc"/>
                    <Image width={32} height={32} src={src3}
                           onMouseEnter={() => setSrc3('/images/Telegram-click.png')}
                           onMouseLeave={() => setSrc3('/images/Telegram.png')}
                           alt="telegram"/>
                    <Image width={32} height={32} src={src4}
                           onMouseEnter={() => setSrc4('/images/GitHub-click.png')}
                           onMouseLeave={() => setSrc4('/images/GitHub.png')} alt="github"/>
                    <Image width={32} height={32} src={src5}
                           onMouseEnter={() => setSrc5('/images/Link-click.png')}
                           onMouseLeave={() => setSrc5('/images/Link.png')} alt="link"/>
                </div>
                <p className="text-white font-ItalianRegular font-light text-[10px]">@2024 Lollipop All rights
                    reserved.</p>
            </div>
        </div>
    </footer>
}
