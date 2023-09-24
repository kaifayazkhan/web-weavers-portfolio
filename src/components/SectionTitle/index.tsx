type SectionTitleType = {
    title:string,
    description:string
}

export default function SectionTitle({title,description}:SectionTitleType) {
    return (
        <div className="text-center max-w-lg flex-cols gap-3 mx-auto">
            <h2 className="text-medium">{title}</h2>
            <p>{description}</p>
        </div>
    )
}
