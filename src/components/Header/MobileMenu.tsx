import Link from "next/link"
import { headerData } from "@/constants/data"
import { headers } from "./types"

export default function MobileMenu({ isOpen }: { isOpen: Boolean }) {
    return (
        <>
            {isOpen && <div className="overlay"></div>}
            <div className={` bg-white drop-shadow-2xl rounded-lg absolute z-50 transition-all duration-300 ease-out min-w-[220px] top-24 right-8 ${isOpen ? "scale-100 " : "scale-0"}`}>
                <ul className="flex-cols justify-center text-black gap-1 py-2">
                    {
                        headerData?.map(({ id, title, link }: headers) => {
                            return (
                                <li key={id} className=" cursor-pointer ">
                                    <Link href={link} className="flex-between  p-3 hover:bg-gray-100" >{title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}