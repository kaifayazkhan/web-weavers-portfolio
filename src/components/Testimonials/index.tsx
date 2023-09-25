import { testimonialsData } from "@/constants/data";
import SectionTitle from "../SectionTitle";
import Card from "./Card";

export default function Testimonials() {
    const testimonialsList = testimonialsData?.map(({ id, image, review, name, designation }) => {
        return <Card key={id} image={image} review={review} name={name} designation={designation} />
    })
    return (
        <div className="mt-16">
            <SectionTitle title="Testimonials" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
            <div className="flex-rows justify-center mt-8 gap-6">
                {testimonialsList}
            </div>
        </div>
    )
}
