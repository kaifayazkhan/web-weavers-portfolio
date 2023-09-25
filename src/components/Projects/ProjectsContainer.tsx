"use client"
import { useState, useEffect } from "react"
import Category from "./Category"
import { projectsData } from "@/constants/data"
import Card from "./Card"

export default function ProjectsContainer() {
    const [category, setCategory] = useState("");
    const [data, setData] = useState(projectsData);

    useEffect(() => {
        if (category === "") {
            setData(projectsData)
            return;
        }else{
            const filteredData = projectsData?.filter((item) => item.category === category);
            setData(filteredData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return (
        <>
            <Category _category={category} _setCategory={setCategory} />
            <div className="flex-col flex flex-wrap md:flex-row mt-10 gap-12 md:gap-6">
                {
                    data?.map(({ id, title, category, image }) => {
                        return <Card key={id} title={title} category={category} image={image} />
                    })
                }
            </div>
        </>
    )
}
