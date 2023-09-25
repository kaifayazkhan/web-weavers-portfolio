import Image from "next/image";

type CardType = {
    image: string,
    review: string,
    name: string,
    designation: string
}

export default function Card({ image, review, name, designation }: CardType) {
    return (
        <div className="flex-rows gap-6 p-6 rounded-xl bg-[#F8F8F8] min-w-[50%] max-w-lg">
            <Image src={image} alt={name} width={150} height={150} />
            <div className="flex-cols gap-2">
                <blockquote>
                    <p className="leading-snug">
                        <span className="text-primaryCTA text-2xl font-extrabold">&#x201C;</span>
                        {review}
                        <span className="text-primaryCTA text-2xl leading-none font-extrabold">&#x201D;</span>
                    </p>
                </blockquote>
                <div>
                    <h4 className="font-bold">{name}</h4>
                    <h4 className="">{designation}</h4>
                </div>
            </div>
        </div>
    )
}
