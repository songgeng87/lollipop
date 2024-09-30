"use client"
import clsx from "clsx"
import styles from './layout.module.scss';
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/card/card";
import Carousel from "@/components/carousel/carousel";
import Footer from "@/components/footer/footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {

    return <div className={clsx(styles.container, "bg-[#320A8C] mt-[80px] w-screen text-[16px] ")}>

        <div className={clsx("flex px-16 pt-16 overflow-x-hidden")}>

            <div className="flex flex-col gap-1 text-4xl font-bold text-white pt-10">
                <div className="  text-xl font-normal text-white pb-10">
                    <p>Take your</p>
                    <p className="text-[#0AEAF1]">Smart Contract</p>
                    <p>anywhere.</p>
                </div>

                <p>The First Solan Native</p>
                <p  >Network Extension Service:</p>
                <p className="text-[#FC15EF]">Making SVM Portabl</p>
            </div>
        </div>
        <div className="mt-16 px-16">
            <button className="w-[200px] h-[60px] active:bg-[#FC15EF] hover:bg-[#FC15EF] border-[#0AEAF1] border border-b-[6px] text-white rounded-full px-8 py-4 cursor-pointer bg-[#5A0A93] active:opacity-80">

                <Link target="_blank" href="https://forms.gle/s7AEykXt6wUExP948" >BOOK A DEMO</Link>

            </button>
        </div>
        <div className={clsx(styles.gradient, "w-full mt-[156px] flex justify-center gap-16 p-24 border-t border-b border-[#1E1E1E]")}>
            <Image width={1174} height={581} src="/images/VideoPage.png" alt="video"></Image>
        </div>
        <div className="bg-[#5A0A93] min-h-screen px-16 p-24">
            <div className={clsx(styles.cardBox, "flex flex-wrap justify-center   gap-4 rounded-2xl")}>
                <Card images={["/images/card1.png", "/images/card-click1.png"]} title='CRYPTOGRAPHIC SETTLEMENT' content='Our cryptographic settlement protocols eliminate the centralization risks, while inheriting the robust security of the Solana mainnet' />
                <Card images={["/images/card2.png", "/images/card-click2.png"]} title="SOLANA-NATIVE NES" content="We enable direct integration of native Solana infrastructure for NEs built with Lollipop and facilitates parallel processing of SVM for enhanced performance." />
                <Card images={["/images/card3.png", "/images/card-click3.png"]} title={<p>LIMITLESS <span className="block">TVL</span></p>} content="Polkadot's JAM as an optional platform for shared sequencerDA and stateless validator provide trustless ground for Network Extensions' limitless TVL." />
                <Card images={["/images/card4.png", "/images/card-click4.png"]} title="SEPARATE & PRIVACY" content="Network extensions can offer customized, isolated pools for computation and privacy, while maintaining value and security with Layer 1." />
                <Card images={["/images/card5.png", "/images/card-click5.png"]} title={<p>Distributed Validators <span className="block">Network</span></p>} content="divides validation tasks distributed among multiple validators, enabling participants with low hardware requirements to stake tokens and earn rewards." />
            </div>
            <div className={clsx(styles['shadow-inner'], "w-full mt-24 min-h-[600px] border-[#FC15EF] border rounded-2xl flex items-center p-16 gap-8")}>
                <Carousel images={[
                    { src: '/images/scroll1.png', width: 640, height: 480, alt: '' },
                    { src: '/images/scroll2.png', alt: '', width: 640, height: 644 },
                    { src: '/images/scroll3.png', alt: '', width: 640, height: 454 },
                ]} />
            </div>
        </div>
        <div className={clsx(styles.banner, 'h-[800px] flex items-end px-16 py-48 justify-between')}>
            <div className="text-white">
                <p className="text-3xl font-bold">EXTEND SOLANA</p>
                <p className="text-3xl font-bold">WITH LOLLIPOP</p>
                <p className="text-white mt-8 max-w-[400px]">We aim to extend SOLana network by... Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione error similique dignissimos, ab totam consequuntur obcaecati? Hic libero nesciunt ducimus eaque fugit incidunt earum neque, accusantium et iste quod.</p>
            </div>
            <div className="grow flex flex-col items-center text-[#0AEAF1] font-bold ml-[200px]">
                <p className="text-xl">FAST DEPLOY A</p>
                <p className="text-xl">CUSTOMIZABLE SOLANA NETWORK EXTENSION</p>
                <button className="w-[200px] h-[60px] mt-8 bg-[rgba(90, 10, 147, .4)] border-[#0AEAF1] border border-b-[6px] text-white rounded-full px-8 py-4 cursor-pointer hover:bg-[#FC15EF] active:bg-[#FC15EF] active:opacity-80">
                    <Link target="_blank" href="https://calendly.com/team-lollipop/30min" >BOOK A MEET</Link>
                </button>
            </div>
        </div>
        <Footer></Footer>
        {children}
    </div>
}