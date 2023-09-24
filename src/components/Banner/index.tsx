import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex-cols flex-col-reverse md:flex-row flex-between gap-8 mt-8">
      <div className="flex-1 flex-cols gap-3 max-w-lg">
        <h4 className="text-sm font-bold">Hi I am</h4>
        <h3 className="text-primaryCTA text-xl font-bold">Mohammad Umair</h3>
        <h1 className="text-large">
          UI & UX <br /> <span className="text-end">Designer</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
        <Link href="#" className="btn-fill">Hire Me</Link>
      </div>
      <div className="flex-1 relative w-full h-full flex justify-center md:justify-end">
        <div className="image-overlay absolute right-[15%] top-[15%] z-10 w-1/4 min-w-[150px] h-10 "></div>
        <Image src="/assets/hero.png" alt="Hero" className="object-scale-down relative" width={400} height={400} />
      </div>
    </div>
  )
}
