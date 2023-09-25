import Image from "next/image"
import Range from "./Range"
export default function About() {
    return (
        <section className="mt-16">
            <div className="flex-between flex-cols md:flex-row">
                <div className="flex-1 flex-center md:flex-rows relative max-w-sm md:max-w-full w-full h-full">
                    <Image src="/assets/about.png" alt="About" className="object-scale-down relative  w-full" width={400} height={400} />
                </div>
                <div className="flex-1">
                    <div>
                        <h2 className="text-medium">About</h2>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    </div>
                    <div className="mt-6 flex-cols gap-5 w-full">
                        <Range title="UX" value="80" />
                        <Range title="Website Design" value="90" />
                        <Range title="App Design" value="86" />
                        <Range title="Graphic Design" value="91" />
                    </div>
                </div>
            </div>
        </section>
    )
}
