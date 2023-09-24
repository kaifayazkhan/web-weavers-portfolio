import { projectsData } from "@/constants/data"
export default function Category() {
    return (
        <div className="flex-center flex-wrap gap-4 mt-5">
            <button className="border-[#545454] bg-[#F8F8F8] border rounded-xl p-3 hover:bg-[#FD6F00] hover:text-white">All</button>
            {
                projectsData?.map(({ id, category }) => {
                    return <button key={id} className="border-[#545454] bg-[#F8F8F8] border rounded-xl p-3 hover:bg-[#FD6F00] hover:text-white">{category}</button>
                })
            }
        </div>
    )
}
