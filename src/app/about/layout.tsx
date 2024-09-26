"use client"
import clsx from "clsx";
import styles from './layout.module.scss';
import Footer from "@/components/footer/footer";
import { useState } from "react";

export default function AboutLayout() {
    // 粉色
    const [hoverPink, setHoverPink] = useState(false);
    // 蓝色
    const [hoverBlue, setHoverBlue] = useState(false);

    return <div className={clsx(styles.container, 'text-white')}>
        <div className="px-16 py-32 min-h-[1050px]">
            <div className="w-full flex gap-2 items-center">
                <p className="text-6xl font-bold">ABOUT US</p>
                <p className="grow border-b border-[#FC15EF]"></p>
                <span className={clsx((hoverPink ? styles['gradient-pink'] : ''),"w-4 h-4 ml-[-8px] border border-[#FC15EF] bg-[#FC15EF] rounded-full")}></span>
                <p className="text-3xl">OUR MISSION</p>
            </div>
            <div className="flex gap-48 w-full">
                <div className="flex flex-col gap-8 grow">
                    <div className="flex ml-[100px]">
                        <div className="min-h-[300px]">
                            <p className="w-[1px] h-full border-r border-[#0AEAF1]"></p>
                            <p className="w-[200px] border-b border-[#0AEAF1]"></p>
                            <p className={clsx((hoverBlue ? styles['gradient-blue'] : ''),"w-4 h-4 mt-[-8px] ml-[192px] border border-[#0AEAF1] bg-[#0AEAF1] rounded-full")}></p>
                        </div>
                        <div className="ml-[8px] mb-[-16px] self-end text-3xl">OUR TECHNOLOGY</div>
                    </div>
                    <div onMouseEnter={() => {setHoverBlue(true)}} onMouseLeave={() => {setHoverBlue(false)}} className={clsx(styles['shadow-inner-blue'], "border-[#0AEAF1] border p-16 rounded-2xl max-h-[300px]")}>
                    Lollipop is the first NES (Network Extension Stack) with cryptographic settlement protocols, extended mainnet security, and infrastructure compatibility with Solana at the same time. It is a native Solana virtual machine (SVM) stack for application-specific networks, also known as RollApps, settled on top of the Solana mainnet. This stack focuses on the Execution Layer and Settlement Protocol, leveraging Solana’s infrastructure for security and high performance. To enhance decentralization, Lollipop will use Polkadot’s JAM as an optional platform for shared sequencer, DA and stateless validator makes NE (Network Extension) on Solana ready for limitless TVL.
                    </div>
                </div>
                <div onMouseEnter={() => {setHoverPink(true)}} onMouseLeave={() => {setHoverPink(false)}}  className={clsx(styles['shadow-inner'], "border-[#FC15EF] border p-16 rounded-2xl max-h-[300px]")}>
                    <p className="text-2xl">&ldquo;Write Once, Deploy Anywhere&rdquo;</p>
                    <p className="mt-8">We are dedicated to bringing the best technology to everyone while reducing development difficulty and application costs. We believe that Solana’s high performance and processing speed, combined with Polkadot JAM’s decentralization and security, currently represent the best in blockchain technology. We will also continuously monitor the latest advancements to stay at the forefront of innovation.</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}