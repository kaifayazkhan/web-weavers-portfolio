import { servicesData } from "@/constants/data"
import Card from "./Card"
import SectionTitle from "../SectionTitle"
export default function Services() {
  return (
    <section className="mt-12">
      <SectionTitle title="Services" description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum" />
      <div className="mt-12 flex-between gap-6 flex-wrap">
        {
          servicesData?.map(({ id, title, text, image }) => {
            return <Card key={id} title={title} text={text} image={image} />
          })
        }
      </div>
    </section>
  )
}
