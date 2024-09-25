"use client"
import clsx from "clsx"
import styles from './layout.module.scss';
import Link from "next/link";
import Image from "next/image";
// import Planet from "@/components/planet/planet";
import Card from "@/components/card/card";
import Carousel from "@/components/carousel/carousel";
import Footer from "@/components/footer/footer";
// import Carousel from "@/components/carousel/carousel";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    // 当前显示容器下标
    // const [currIndex, setCurrIndex] = useState(0);
    // 缓存上一次的scrollY数据
    // const scrollYCache = useRef(0);
    // 当前滚动方向 up, down
    // const [scrollAction, setScrollAction] = useState('down')

    // const domScroll = (e: any) => {            
    //     const scrollBox = document.getElementById("scrollBox");

    //     const scroll1 = document.getElementById('scrollBox1');
    //     const scroll2 = document.getElementById('scrollBox2');
    //     const scroll3 = document.getElementById('scrollBox3');
    //     if(scrollBox && scroll1 && scroll2 && scroll3){
    //         let index = 0;
    //         if(scrollYCache.current === 0){
    //             if((scroll1.offsetTop - window.screenTop + scroll1.offsetHeight / 2) > window.innerHeight / 2){
    //                 scrollBox.style.position = 'fixed';
    //                 index = 1
    //                 scrollBox.style.top = `${window.innerHeight / 2 - scroll2.offsetHeight / 2}px`
    //             }else{
    //                 scrollBox.style.position = 'absolute';
    //                 scrollBox.style.width = `${scroll1?.offsetWidth}px`
    //                 scrollBox.style.top = `${scroll1?.offsetTop && scroll1?.offsetTop - 96}px`
    //                 scrollBox.style.left = `${scroll1?.offsetLeft}px`
    //             }
    //         }
    //         if(scrollYCache.current === 1){
    //             if((scroll2.offsetTop - window.screenTop + scroll2.offsetHeight / 2) > window.innerHeight / 2){
    //                 scrollBox.style.position = 'fixed';
    //                 index = 2
    //                 scrollBox.style.top = `${window.innerHeight / 2 - scroll3.offsetHeight / 2}px`
    //             }else{
    //                 scrollBox.style.position = 'fixed';
    //                 index = 0
    //                 scrollBox.style.top = `${window.innerHeight / 2 - scroll1.offsetHeight / 2}px`
    //             }
    //         }
    //         if(scrollYCache.current === 2){
    //             if((scroll3.offsetTop - window.screenTop + scroll3.offsetHeight / 2) > window.innerHeight / 2){
    //                 scrollBox.style.position = 'absolute';
    //                 scrollBox.style.width = `${scroll3?.offsetWidth}px`
    //                 scrollBox.style.top = `${scroll3?.offsetTop && scroll3?.offsetTop - 96}px`
    //             }else{
    //                 scrollBox.style.left = `${scroll2?.offsetLeft}px`
    //                 scrollBox.style.position = 'fixed';
    //                 index = 1
    //                 scrollBox.style.top = `${window.innerHeight / 2 - scroll2.offsetHeight / 2}px`
    //             }
    //         }
    //         scrollYCache.current = index;
    //         setCurrIndex(index)
    //     }
    //     // 设置元素位置


    //     // element.style.position = 'absolute';


    //     // element.style.top = scrollPosition + 'px';
    // }

    // useEffect(() => {
    //     const scrollBox = document.getElementById("scrollBox");
    //     const scrollBox1 = document.getElementById("scrollBox1");
    //     if(scrollBox){
    //         scrollBox.style.width = `${scrollBox1?.offsetWidth}px`
    //         scrollBox.style.top = `${scrollBox1?.offsetTop && scrollBox1?.offsetTop - 96}px`
    //         scrollBox.style.left = `${scrollBox1?.offsetLeft}px`
    //     }
    //     window.addEventListener('scroll', domScroll);
    //     return () => {
    //         window.removeEventListener('scroll', domScroll);
    //     }
    // }, [])

    return <div className={clsx(styles.container, "bg-[#320A8C] mt-[80px] w-screen text-[16px] ")}>
        <div className={clsx("flex px-16 pt-16 overflow-x-hidden")}>
            <div className="flex flex-col gap-1 text-4xl font-bold text-white pt-10">
                <p>THE FIRST</p>
                <p>SOLANA-NATIVE <span className="text-[#0AEAF1]">SVM-POWERED</span></p>
                <p className="text-[#0AEAF1]">NETWORK EXTENSION SERVICE</p>
                <p>WITH <span className="text-[#FC15EF]">CRYPTOGRAPHIC</span></p>
                <p className="text-[#FC15EF]">SETTLEMENT PROTOCOLS.</p>
                <p className="text-xl font-thin mt-8">Customizable, Decentralized & Infrastructure Compatible </p>
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
        {/* <div className="w-full mt-16 flex gap-16 px-16">
            <video className="border-[#FC15EF] border border-b-[6px] rounded-3xl grow" width="640" height="360" controls poster="/images/earth.jpg">
                <source src="https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="w-[450px] flex flex-col justify-end">
                <div className="text-white text-right text-xl">
                    <p>DESIGNED FOR</p>
                    <p>APPLICATION-SPECIFIC</p>
                    <p>SVM CHADESIGNED FOR</p>
                    <p>APPLICATION-SPECIFIC</p>
                    <p>SVM CHAIN</p>
                </div>
                <div className="text-white text-right mt-8 text-3xl">
                    <p>COPYWRITING PLACEHOLDER</p>
                    <p>COPYWRITING</p>
                </div>
            </div>
        </div> */}
        <div className="bg-[#5A0A93] min-h-screen px-16 p-24">
            <div className="flex gap-4 rounded-2xl h-[378px]">
                <Card images={["/images/card1.png", "/images/card-click1.png"]} title='CRYPTOGRAPHIC SETTLEMENT PROTOCOLS' content='Our cryptographic settlement protocols eliminate the centralization risks, while inheriting the robust security of the Solana mainnet' />
                <Card images={["/images/card2.png", "/images/card-click2.png"]} title="SOLANA-NATIVE NES" content="As a Solana-native NES (Network Extension Stack), we enable direct integration of native Solana wallets and tools for developers, and facilitates parallel processing of SVM for enhanced performance." />
                <Card images={["/images/card3.png", "/images/card-click3.png"]} title="LIMITLESS TVL" content="Polkadot's JAM as an optional platform for shared sequencerDA and stateless validator provide trustless ground for Network Extensions' limitless TVL." />
                <Card images={["/images/card4.png", "/images/card-click4.png"]} title="SEPARATE & PRIVACY" content="Network extensions can offer customized, isolated pools for computation and privacy, while maintaining value and security with Layer 1." />
                <Card images={["/images/card5.png", "/images/card-click5.png"]} title="SHARED ECONOMY" content="Our innovative value-redistribution economy model, coupled with elastic inflation mechanism, ensures the long-term sustainability and growth of our ecosystem." />
            </div>
            <div className={clsx(styles['shadow-inner'], "w-full mt-24 border-[#FC15EF] border rounded-2xl flex items-center p-16 gap-8")}>
                <Carousel images={[
                    { src: '/images/scroll1.png', alt: 'burger' },
                    { src: '/images/scroll2.png', alt: 'burger' },
                    { src: '/images/scroll3.png', alt: 'burger' },
                    // { src: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp', alt: 'burger' }
                ]} />
            </div>
            {/* <div className={clsx(styles['shadow-inner'],"w-full mt-24 border-[#FC15EF] border rounded-2xl flex flex-col p-16 gap-8")}>
    
            </div> */}
            {/* <div id="scrollBox" className={clsx(styles['shadow-inner'],"w-full mt-24 border-[#FC15EF] border rounded-2xl flex p-16 gap-8 absolute")}>
                <Image width={640} height={480} src={`/images/scroll${currIndex + 1}.png`} alt="scroll"></Image>
                <div className="text-white text-xl w-1/2">
                    The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
                </div>
            </div>
            <div id="scrollBox1" className={clsx(styles['shadow-inner'],"w-full mt-24 border-[#FC15EF] border rounded-2xl flex p-16 gap-8 invisible")}>
                <Image width={640} height={480} src="/images/scroll1.png" alt="scroll"></Image>
                <div className="text-white text-xl w-1/2">
                    The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
                </div>
            </div>
            <div id="scrollBox2" className={clsx(styles['shadow-inner'],"w-full mt-24 border-[#FC15EF] border rounded-2xl flex p-16 gap-8 invisible")}>
                <Image width={640} height={644} src="/images/scroll2.png" alt="scroll"></Image>
                <div className="text-white text-xl w-1/2">
                    The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
                </div>
            </div>
            <div id="scrollBox3" className={clsx(styles['shadow-inner'],"w-full mt-24 border-[#FC15EF] border rounded-2xl flex p-16 gap-8 invisible")}>
                <Image width={640} height={454} src="/images/scroll3.png" alt="scroll"></Image>
                <div className="text-white text-xl w-1/2">
                    The State and data commitment are submitted to the Solana network, sothe validator can check them both independently.
                </div>
            </div> */}
        </div>
        <div className={clsx(styles.banner, 'h-[800px] flex items-end px-16 py-48 gap-48')}>
            <div className="text-white">
                <p className="text-3xl font-bold">EXTEND SOLANA</p>
                <p className="text-3xl font-bold">WITH LOLLIPOP</p>
                <p className="text-white mt-8 w-[400px]">We aim to extend the Solana network by facilitating the deployment of Solana-native Network Extensions, moving beyond merely engaging with the SVM hype. This initiative is designed to prevent the fragmentation often seen in the EVM landscape. By focusing on RollApps instead of traditional Solana fork chain and AppChain, together we can create a unified SVM environment and ecosystem, underpinned by the security and capacities of Solana mainnet.</p>
            </div>
            <div className="grow flex flex-col items-center text-[#0AEAF1] font-bold">
                <p className="text-xl">FAST DEPLOY A</p>
                <p className="text-xl">CUSTOMIZABLE SOLANA NETWORK EXTENSION</p>
                <button className="w-[200px] h-[60px] mt-8 bg-[rgba(90, 10, 147, .4)] border-[#0AEAF1] border border-b-[6px] text-white rounded-full px-8 py-4 cursor-pointer hover:bg-[#FC15EF] active:bg-[#FC15EF] active:opacity-80">START A CHAT</button>
            </div>
        </div>
        <Footer></Footer>
        {children}
    </div>
}