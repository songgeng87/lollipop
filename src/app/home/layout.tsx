"use client"
import clsx from "clsx"
import styles from './layout.module.scss';
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card/card";
import Carousel from "@/components/carousel/carousel";
import Footer from "@/components/footer/footer";
import {useEffect, useState, useRef} from "react";

export default function HomeLayout({children}: { children: React.ReactNode }) {
    const childRef = useRef<any>(null);

    const textRef = useRef(null); // 创建引用，用来指向DOM元素
    const [isVisible, setIsVisible] = useState(false); // 用于控制动画的状态

    const handleScroll = (event: Event) => {
        childRef.current.handleScroll(event); // 根据你的业务逻辑修改这一行
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // 添加滚动事件监听器

        // 创建IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // 当元素进入可视区域时，设置isVisible为true
                    }
                });
            },
            {threshold: 0.2} // 元素进入50%时触发
        );

        // 观察目标元素
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);

            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []); // 仅在组件挂载和卸载时运行

    return <div className={clsx(styles.container, "bg-[#320A8C] mt-[80px] w-[100%] text-[16px] ")}>

        <div className={clsx("flex px-16 pt-16 overflow-x-hidden flex justify-between")}>
            <div
                className={clsx(styles.slideText1, "flex flex-col gap-1 text-4xl font-bold text-white pt-6")}>
                <div className="font-ItalianRegular font-normal text-[28px] text-white pb-8">
                    <p className='leading-tight'>Take your</p>
                    <p className="text-[#0AEAF1] font-ItalianDemibold font-bold leading-tight">Smart Contract</p>
                    <p className='leading-tight'>anywhere.</p>
                </div>

                <p className='font-SebneueSemiHeavy mb-2 text-[50px]'>The First Solana Native</p>
                <p className='font-SebneueSemiHeavy mb-2 text-[50px]'>Network Extension Service:</p>
                <p className=" font-SebneueSemiHeavy text-[#FC15EF] text-[50px]">Making SVM Portable</p>

                {/* <p>THE FIRST</p>
                <p>SOLANA-NATIVE <span className="text-[#0AEAF1]">SVM-POWERED</span></p>
                <p className="text-[#0AEAF1]">NETWORK EXTENSION SERVICE</p>
                <p>WITH <span className="text-[#FC15EF]">CRYPTOGRAPHIC</span></p>
                <p className="text-[#FC15EF]">SETTLEMENT PROTOCOLS.</p> */}
                <p className="font-normal mt-3 font-ItalianRegular text-[22px]">Customizable, Decentralized &
                    Infrastructure
                    Compatible</p>
            </div>
        </div>
        <div className="h-[180px] mt-14 px-16">
            <button
                className={clsx(styles.slideText1, "text-[16px] w-[200px] h-[60px] active:bg-[#FC15EF] hover:bg-[#FC15EF] border-[#0AEAF1] border border-b-[6px] text-white rounded-full px-8 py-4 cursor-pointer bg-[rgba(90,10,147,0.4)] active:opacity-80 font-ItalianDemibold font-semibold")}>

                <Link target="_blank" href="https://forms.gle/s7AEykXt6wUExP948">Request a demo</Link>

            </button>
        </div>
        <div className={clsx(styles.videoPage)}>
            <div className='text-[#ffffff] w-[640px] text-center text-[50px] font-SebneueSemiHeavy'>Value Never Leaves
                Layer 1
                For A Network Extension (NE),
                Only Data And Compute.
            </div>
        </div>
        <div className="bg-[#5A0A93] min-h-screen px-16 p-24">
            <div
                className={clsx("flex flex-wrap justify-center min-w-[290px] gap-6 rounded-2xl pt-16 pb-16")}>
                <Card images={["/images/card1.png", "/images/card-click1.png"]}
                      title={<p>CRYPTOGRAPHIC <span className="block">SETTLEMENT PROTOCOLS</span></p>}
                      content='Our cryptographic settlement protocols eliminate the centralization risks, while inheriting the robust security of the Solana mainnet'/>
                <Card images={["/images/card2.png", "/images/card-click2.png"]} title="SOLANA-NATIVE NES"
                      content="We enable direct integration of native Solana infrastructure for NEs built with Lollipop and facilitates parallel processing of SVM for enhanced performance."/>
                <Card images={["/images/card4.png", "/images/card-click4.png"]} title="SEPARATE & PRIVACY"
                      content="Network extensions can offer customized, isolated pools for computation and privacy, while maintaining value and security with Layer 1."/>
                <Card images={["/images/card3.png", "/images/card-click3.png"]}
                      title={<p>LIMITLESS TVL</p>}
                      content="Polkadot's JAM as an optional platform for shared sequencerDA and stateless validator provide trustless ground for Network Extensions' limitless TVL."/>
                <Card images={["/images/card5.png", "/images/card-click5.png"]}
                      title={<p>SHARED ECONOMY</p>}
                      content="Our innovative value-redistribution economy model,coupled with elastic inflation mechanism, ensures the long-term sustainability and growth of our ecosystem."/>
            </div>
            <div
                className={clsx(styles['shadow-inner'], "w-full mt-24 min-h-[600px] border-[#FC15EF] border rounded-2xl flex items-center p-16 gap-8")}>
                <Carousel ref={childRef} images={[
                    {src: '/images/scroll1.png', width: 640, height: 644, alt: ''},
                    {src: '/images/scroll2.png', alt: '', width: 640, height: 644},
                    {src: '/images/scroll3.png', alt: '', width: 640, height: 644},
                ]}/>
            </div>
        </div>
        <div className={clsx(styles.banner, 'h-[800px]  px-16 pt-[220px]')}>
            <div ref={textRef}
                 className={clsx(styles.slideText, styles.active, " text-white")}>
                <p className="fn-SebneueSemiHeavy text-[40px] font-bold">EXTEND SOLANA</p>
                <p className="fn-SebneueSemiHeavy text-[40px] font-bold mt-[-12px]">WITH LOLLIPOP</p>
                <p className="font-ItalianRegular text-[20px] leading-snug mt-[40px] max-w-[500px]">We aim to extend Solana
                    mainnet by
                    facilitating the deployment of Solana-native
                    NEs. This initiative is to provide developers
                    private pools for customizalbility and
                    computation, while maintaining value and
                    security with Layer 1.</p>
            </div>
            <div ref={textRef}
                 className={clsx(styles.slideText, styles.active, "mt-[80px] flex items-center justify-between text-[#0AEAF1] font-bold")}>
                <div>
                    <p className="fn-SebneueSemiHeavy text-[46px]">FAST DEPLOY</p>
                    <p className="fn-SebneueSemiHeavy text-[46px] mt-[-20px]">A CUSTOMIZABLE SOLANA NETWORK EXTENSION</p>
                </div>
                <button
                    className={clsx(styles.button, "text-[16px] w-[220px] h-[60px]  border-[#0AEAF1] border border-b-[6px] text-white rounded-full px-8 py-4 cursor-pointer active:opacity-80 font-ItalianDemibold font-semibold")}>
                    <Link target="_blank" href="https://calendly.com/team-lollipop/30min">BOOK A MEETING</Link>
                </button>
            </div>
        </div>
        <Footer></Footer>
        {children}
    </div>
}
