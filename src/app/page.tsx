import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="global-padding overflow-hidden">
        <div className="container mb-32">
          <Banner />
          <About/>
          <Services/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  )
}
