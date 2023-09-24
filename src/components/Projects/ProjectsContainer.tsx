import { projectsData } from "@/constants/data"
import Card from "./Card"

export default function ProjectsContainer() {
    return (
        <div className="flex-col flex-rows md:flex-row mt-10 gap-12 md:gap-6">
            {
                projectsData?.map(({ id, title, category, image }) => {
                    return <Card key={id} title={title} category={category} image={image} />
                })
            }
        </div>
    )
}
