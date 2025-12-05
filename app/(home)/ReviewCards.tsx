"use client"
import { useState, useEffect } from "react"
import { Josefin_Sans } from 'next/font/google'
const josefin = Josefin_Sans({
  subsets: ['latin'],
})
interface ResourceItem {
    _id: string;
    name: string;
    course: string;
    review: string;
}
const ReviewCards = () => {
    const [data, setData] = useState<ResourceItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/reviews");

            const json = await res.json();
            setData(json)
        };
        fetchData();


    }, [])
    const displayedData = data;
    return (


        <div className="max-w-7xl mx-auto h-150 mt-20">
            <h1 className={`md:text-5xl text-3xl text-center font-bold text-black ${josefin.className}`}>STUDENT <span className="text-blue-600">REVIEWS</span></h1>
            <div className=" mt-20 lg:grid lg:grid-cols-2 gap-x-5 gap-y-10  place-items-center flex flex-col">
                {displayedData.map((item) => (
                    <div key={item._id} className={`h-60 p-10 w-155 border-black rounded-2xl flex flex-col relative shadow-md text-black ${josefin.className}`}>
                        <div className="flex place-items-end place-content-start flex-1 w-full gap-6"><img src="/userIcon.png" alt="" className="h-20 w-22" />
                       <div className="mb-1"> <div className="text-xl">Name: {item.name}</div>
                       <div className="text-md text-gray-700">Course: {item.course}</div>
                       </div>
                        </div>
                        <div className="text-center flex flex-col flex-1 place-content-center">"{item.review}"</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewCards