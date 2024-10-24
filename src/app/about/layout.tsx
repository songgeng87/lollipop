"use client"
import clsx from "clsx";
import styles from './layout.module.scss';
import Footer from "@/components/footer/footer";
import {useState} from "react";

export default function AboutLayout() {

    return <div className={clsx(styles.container, 'text-white')}>
        <div className="px-16 py-48">
            <div className="w-[98%] flex gap-2 items-center">
                <p className={clsx(styles.fadeInText, "text-[64px] font-SebneueSemiHeavy font-bold")}>ABOUT US</p>
                <p className={clsx(styles.max, styles.fadeInText, "grow border-b border-[#FC15EF]")}></p>
                <span
                    className={clsx((styles['gradient-pink']), styles.max, styles.fadeInText, "w-4 h-4 ml-[-8px] border border-[#FC15EF] bg-[#FC15EF] rounded-full")}></span>
                <p className={clsx(styles.max, styles.fadeInText, "font-SebneueSemiBold font-semibold text-[34px]")}>OUR
                    MISSION</p>
            </div>
            <div className="flex w-[98%]">
                <div className="flex flex-col gap-8 grow">
                    <div className="flex ml-[10vw]">
                        <div className="min-h-[10vw]">
                            <p className={clsx(styles.fadeInText, "w-[1px] h-full border-r border-[#0AEAF1]")}></p>
                            <p className={clsx(styles.fadeInText, "w-[8vw] border-b border-[#0AEAF1]")}></p>
                            <p className={clsx((styles['gradient-blue']), styles.fadeInText, "w-4 h-4 ml-[8vw] mt-[-8px] border border-[#0AEAF1] bg-[#0AEAF1] rounded-full")}></p>
                        </div>
                        <div
                            className={clsx(styles.fadeInText, "font-SebneueSemiBold font-semibold text-[34px] ml-[8px] mb-[-26px] self-end ")}>OUR
                            TECHNOLOGY
                        </div>
                    </div>
                    <div
                        className={clsx(styles['shadow-inner-blue'], styles.fadeInText, "font-ItalianRegular text-[18px] font-normal mt-[20px] border-[#0AEAF1] border p-8 rounded-2xl h-[236px] w-[550px] overflow-auto")}>
                        Lollipop ls The First NES With Cryptographic Settlement Protocols, Extended Mainnet Security,
                        And Infrastructure Compatibility With Solana At The Same Time. We Enable The Creation Of Solana
                        Native NEs For Dapps, And SVM Forks Or Ethereum Forks [L1&L2] To Settle On The Solana Mainnet
                        Through Lollipop Stack.
                    </div>
                </div>
                <div
                     className={clsx(styles['shadow-inner'], styles.fadeInText, "border-[#FC15EF] border p-8 rounded-2xl ml-[5vw] h-[340px] w-[570px] overflow-auto")}>
                    <p className="font-ItalianDemibold text-[24px] font-medium">&ldquo;Write
                        Once, Deploy Anywhere&rdquo;</p>
                    <p className="font-ItalianRegular text-[18px] font-normal mt-6">Lollipop Harnesses Solana's Robust
                        Infrastructure For High Security And Performance, While Integrating Polkadot's JAM As Optional
                        Platform For Shared Sequencing, Data Availability (DA), And Stateless Validation. This Synergy
                        Empowers SVM Network Extensions With Superior Performance, Enhanced Decentralization, And
                        Seamless Mobility Across Ecosystems.
                    </p>
                </div>
            </div>
            <div className={clsx(styles.miniFlex, "w-full flex gap-2 items-center m-8")}>
                <span
                    className={clsx(( styles['gradient-pink'] ), "w-4 h-4 ml-[-8px] border border-[#FC15EF] bg-[#FC15EF] rounded-full")}></span>
                <p className="font-SebneueSemiBold font-semibold text-[34px]">OUR MISSION</p>
            </div>
            <div
                 className={clsx(styles['shadow-inner'], styles.mini, "border-[#FC15EF] border p-8 rounded-2xl mt-4 h-[330] overflow-auto")}>
                <p className="text-2xl">&ldquo;Write Once, Deploy Anywhere&rdquo;</p>
                <p className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi, natus, ullam
                    a ipsum cum, corporis voluptate quo odio omnis nam repudiandae error! Laboriosam architecto
                    quibusdam incidunt. Deserunt, rerum unde.</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
}
