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
                <p className={clsx(styles.max, "grow border-b border-[#FC15EF]")}></p>
                <span className={clsx((hoverPink ? styles['gradient-pink'] : ''),styles.max,"w-4 h-4 ml-[-8px] border border-[#FC15EF] bg-[#FC15EF] rounded-full")}></span>
                <p className={clsx(styles.max,"text-3xl")}>OUR MISSION</p>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col gap-8 grow">
                    <div className="flex ml-[10vw]">
                        <div className="min-h-[10vw]">
                            <p className="w-[1px] h-full border-r border-[#0AEAF1]"></p>
                            <p className="w-full border-b border-[#0AEAF1]"></p>
                            <p className={clsx((hoverBlue ? styles['gradient-blue'] : ''),"w-4 h-4 ml-[15vw] mt-[-8px] border border-[#0AEAF1] bg-[#0AEAF1] rounded-full")}></p>
                        </div>
                        <div className="ml-[8px] mb-[-16px] self-end text-3xl">OUR TECHNOLOGY</div>
                    </div>
                    <div onMouseEnter={() => {setHoverBlue(true)}} onMouseLeave={() => {setHoverBlue(false)}} className={clsx(styles['shadow-inner-blue'], "border-[#0AEAF1] border p-8 rounded-2xl h-[300px] overflow-auto")}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis pariatur enim harum ad dolor expedita, iure itaque fugit non error sint fuga ex consequuntur est quis eaque modi quas in.
                    </div>
                </div>
                <div onMouseEnter={() => {setHoverPink(true)}} onMouseLeave={() => {setHoverPink(false)}}  className={clsx(styles['shadow-inner'], styles.max, "border-[#FC15EF] border p-8 rounded-2xl ml-[5vw] h-[300px] overflow-auto")}>
                    <p className="text-2xl">&ldquo;Write Once, Deploy Anywhere&rdquo;</p>
                    <p className="mt-8">We are dedicated to bringing the best technology to everyone while reducing development difficulty and application costs. We believe that Solana’s high performance and processing speed, combined with Polkadot JAM’s decentralization and security, currently represent the best in blockchain technology. We will also continuously monitor the latest advancements to stay at the forefront of innovation.</p>
                </div>
            </div>
            <div className={clsx(styles.miniFlex, "w-full flex gap-2 items-center m-8")}>
                <span className={clsx((hoverPink ? styles['gradient-pink'] : ''),"w-4 h-4 ml-[-8px] border border-[#FC15EF] bg-[#FC15EF] rounded-full")}></span>
                <p className="text-3xl">OUR MISSION</p>
            </div>
            <div onMouseEnter={() => {setHoverPink(true)}} onMouseLeave={() => {setHoverPink(false)}}  className={clsx(styles['shadow-inner'], styles.mini, "border-[#FC15EF] border p-8 rounded-2xl mt-4 h-[300px] overflow-auto")}>
                <p className="text-2xl">&ldquo;Write Once, Deploy Anywhere&rdquo;</p>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, natus, ullam a ipsum cum, corporis voluptate quo odio omnis nam repudiandae error! Laboriosam architecto quibusdam incidunt. Deserunt, rerum unde.</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
}