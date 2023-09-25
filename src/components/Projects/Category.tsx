import { projectsData } from "@/constants/data";

type CategoryProps = {
    _category: string;
    _setCategory: (catgType: string) => void;
}

const btnStyle = `border-[#545454] bg-[#F8F8F8] border rounded-xl p-3 hover:bg-[#FD6F00] hover:text-white`
export default function Category({ _category, _setCategory }: CategoryProps) {
    const handleCategoryChange = (catgType: string) => {
        _setCategory(catgType);
    };

    return (
        <div className="flex-center flex-wrap gap-4 mt-5">
            <button
                onClick={() => handleCategoryChange("")}
                className={`${btnStyle} ${_category === "" && "bg-primaryCTA text-white"}`}
            >
                All
            </button>
            {projectsData?.map(({ id, category }) => (
                <button
                    key={id}
                    onClick={() => handleCategoryChange(category)}
                    className={`${btnStyle} ${_category === category && "bg-primaryCTA text-white"}`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
