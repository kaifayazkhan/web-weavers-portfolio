import { mediaLinkData } from "@/constants/data"
import Image from "next/image"
import Link from "next/link"
export default function MediaLinks() {
    return (
        <div className="flex-center gap-6">
            {
                mediaLinkData?.map(({ id, title, link, icon }) => {
                    return (
                        <Link key={id} href={link}>
                            <Image src={icon} alt={title} width={20} height={20} />
                        </Link>
                    )
                })
            }
        </div>
    )
}
