import Image from "next/image"

type CardType = {
    title: string,
    category: string,
    image: string
}

export default function Card({ image, title, category }: CardType) {
    return (
        <div className="flex-1 w-full min-w-[30%]">
            <div className="bg-[#FFEBDB] relative rounded-xl h-96 md:h-52 px-8 lg:h-96">
                <Image src={image} fill alt={title} className="object-contain"/>
            </div>
            <div className="mt-4">
                <p className="text-primaryCTA">{category}</p>
                <p className="font-extrabold mt-2">{title}</p>
            </div>
        </div>
    )
}
