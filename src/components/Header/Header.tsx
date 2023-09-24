'use client'
import Image from "next/image";
import Link from "next/link";
import { headers } from "./types";
import { headerData } from "@/constants/data";
import Hamburger from "./Hamburger";

export default function Header() {
    return (
        <header className=" w-full relative top-0 z-30 left-0 right-0 global-padding">
            <div className="h-20 flex-between container ">
                <Link href="#" className="flex-rows">
                    <Image src="/assets/icons/logo.png" alt="Logo" width={160} height={100} />
                </Link>
                <nav>
                    <ul className="flex-rows gap-8 hidden lg:flex">
                        {
                            headerData?.map(({ id, title, link }: headers) => {
                                return (
                                    <li key={id} className={`hover:text-primaryCTA   transition-all duration-200 flex-rows gap-2 cursor-pointer relative`}>
                                        <Link href={link}>{title}</Link>
                                    </li>
                                )
                            })
                        }
                        <Link href="#" className="btn-fill">Download CV</Link>
                    </ul>
                </nav>
                <Hamburger />
            </div>
        </header>
    )
}