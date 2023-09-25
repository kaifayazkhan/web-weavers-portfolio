import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="global-padding overflow-hidden">
        <div className="container mb-32">
          <Banner />
          <About />
          <Services />
          <Projects />
        </div>
      </div>
      <div className="overflow-hidden">
        <Testimonials />
      </div>
      <div className="global-padding">
        <div className="container my-32">
          <Contact />
        </div>
      </div>
    </>
  )
}
