import RangePoint from "./RangePoint";
type RangeType = {
    title: string;
    value: string;
};

export default function Range({ title, value }: RangeType) {
    const rangeWidth = `${value}%`;

    return (
        <div>
            <label htmlFor="disabled-range" className="block mb-2 text-xl font-extrabold">
                {title}
            </label>
            <div className="w-full h-3 bg-gray-300 rounded-lg relative">
                <div className={`absolute inset-0 bg-primaryCTA rounded-l-lg`} style={{ width: rangeWidth }}></div>
                <div className={`absolute h-full flex-center top-[1.5px]`} style={{ right: `calc(98% - ${rangeWidth})` }}>
                    <RangePoint />
                </div>
            </div>
        </div>
    );
}
