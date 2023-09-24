import Link from "next/link"
import Image from "next/image"
import FooterLinks from "./FooterLinks"
import MediaLinks from "../MediaLinks"
export default function Footer() {
    return (
        <>
            <footer className="bg-[#F8F8F8] flex-center flex-col gap-8 py-20">
                <Link href="#" className="flex-rows">
                    <Image src="/assets/icons/logo.png" alt="Logo" width={160} height={100} />
                </Link>
                <FooterLinks />
                <MediaLinks />
            </footer>
            <div className="bg-[#545454] py-4 text-center text-white">
                © 2023 <span className="text-primaryCTA">Mumair</span> All Rights Reserved , Inc.
            </div>
        </>
    )
}
