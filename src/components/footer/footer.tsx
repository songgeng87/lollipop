import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return <footer className="py-24 bg-[#320A8C] px-16 pt-24 rounded-t-2xl border border-b-[24px] border-[#FC15EF]">
        <div className="flex">
            <div className="flex gap-24 w-1/2">
                <div className="text-white flex flex-col">
                    <Link href="/">Home</Link>
                    <Link href="/" className="mt-4">About</Link>
                </div>
                <div className="text-white flex flex-col">
                    <Link href="/">Builders</Link>
                    <Link href="https://arxiv.org/abs/2405.08882" className="mt-4">Research Paper</Link>
                    <Link href="/" className="mt-2">Lite Paper</Link>
                    <Link href="/" className="mt-2">Doc</Link>
                </div>
            </div>
            <div className="flex items-center grow gap-4">
                <input type="text" placeholder="Enter your email" className="grow input input-bordered placeholder:text-white rounded-full border-[#F4F0FF] bg-[#320A8C] text-white focus:border-[#F4F0FF]" />
                <button className="w-[140px] h-[50px] border-[#FC15EF] border bg-[#5A0A93] rounded-full text-white px-8 py-3 cursor-pointer active:opacity-80">Subcribe</button>
            </div>
        </div>
        <div className="mt-16">
            <div className="flex gap-4 text-2xl items-center">
                <Image width={168} height={42} src="/images/logo.png" alt="logo" />
            </div>
            <div className="mt-8 flex justify-between">
                <div className="flex gap-x-16 items-center">
                    <p className="text-white">Find us on</p>
                    <Link href="https://x.com/LollipopHQ" className="mt-4">
                        <Image width={32} height={32} src="/images/Twitter.png" alt="twitter" />
                    </Link>
                    <Image width={32} height={32} src="/images/DC.png" alt="dc" />
                    <Image width={32} height={32} src="/images/Telegram.png" alt="telegram" />
                    <Image width={32} height={32} src="/images/Github.png" alt="github" />
                    <Image width={32} height={32} src="/images/Link.png" alt="link" />
                </div>
                <p className="text-white">@2024 Lolipop All rights reserved.</p>
            </div>
        </div>
    </footer>
}