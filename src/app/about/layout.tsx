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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis pariatur enim harum ad dolor expedita, iure itaque fugit non error sint fuga ex consequuntur est quis eaque modi quas in.
                    </div>
                </div>
                <div onMouseEnter={() => {setHoverPink(true)}} onMouseLeave={() => {setHoverPink(false)}}  className={clsx(styles['shadow-inner'], "border-[#FC15EF] border p-16 rounded-2xl max-h-[300px]")}>
                    <p className="text-2xl">&ldquo;Write Once, Deploy Anywhere&rdquo;</p>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, natus, ullam a ipsum cum, corporis voluptate quo odio omnis nam repudiandae error! Laboriosam architecto quibusdam incidunt. Deserunt, rerum unde.</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
}