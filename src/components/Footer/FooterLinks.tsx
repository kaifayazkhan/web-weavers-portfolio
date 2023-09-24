import { footerData } from "@/constants/data"
import Link from "next/link"

type FooterLinksType = {
    id: number,
    title: string
}

export default function FooterLinks() {
    return (
        <ul className="flex-center flex-wrap gap-6">
            {
                footerData?.map(({ id, title }: FooterLinksType) => {
                    return <li key={id}><Link href="#">{title}</Link></li>
                })
            }
        </ul>
    )
}
