import SectionTitle from "../SectionTitle";

export default function Contact() {
    return (
        <section className="mt-16">
            <SectionTitle title="Lets Design Together" description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium" />
            <form className="w-full max-w-xl flex-wrap justify-start flex-rows sm:justify-center mx-auto mt-8 gap-3">
                <input type="email" placeholder="Enter Your Email" className="border border-[#AFAFAF] w-full sm:w-[70%] bg-[#F8F8F8] p-2 rounded-lg" />
                <button type="submit" className="btn-fill min-w-fit rounded-lg">Contact me</button>
            </form>
        </section>
    )
}
