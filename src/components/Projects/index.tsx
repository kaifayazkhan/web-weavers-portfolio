import SectionTitle from "../SectionTitle";
import Category from "./Category";
import ProjectsContainer from "./ProjectsContainer";

export default function Projects() {
    return (
        <section className="mt-12">
            <SectionTitle title="Projects" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" />
            <Category />
            <ProjectsContainer/>
        </section>
    )
}
