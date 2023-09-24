import Image from "next/image";

type CardType = {
    image: string,
    title: string,
    text: string
}

export default function Card({ image, title, text }: CardType) {
    return (
        <div className="flex-cols gap-2 rounded-xl bg-[#F8F8F8] p-6 w-full sm:w-[45%] md:max-w-[45%] lg:flex-1">
            <Image src={image} width={60} height={60} alt={title} className="max-h-[60px] object-contain" />
            <h3 className="font-bold text-xl">{title}</h3>
            <p>{text}</p>
        </div>
    )
}
