import kato from "../assets/kato.jpg";
import china from "../assets/temple.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
function Thingtodo() {
    const [allActivities, setActivities] = React.useState([])

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/all_categories`)
            .then((response) => {
                console.log(response.data)
                setActivities(response.data)

            })
    }, [])
    return (
        <div className="container mx-auto my-5">
            <p className="my-7 font-bold tracking-wide">Things to do</p>
            <div className="grid grid-cols-5 gap-4 m-3 justify-items-center ">
                {
                    allActivities.map((activities) => {
                        return (
                            <div className="">
                                <div
                                    className="rounded-full h-[18vh]  w-[7rem] bg-cover"
                                    style={{ backgroundImage: `url(https://res.cloudinary.com/hanancodes/${activities.category_image})` }}
                                >

                                </div>
                                <p className="my-3 text-center">{activities.name}</p>
                            </div>
                        )
                    })
                }


                {/* <div>
                    <div
                        className="rounded-full h-[18vh]  w-[4rem] bg-cover"
                        style={{ backgroundImage: `url(${kato})` }}
                    ></div>
                    <p className="my-3">Beaches</p>
                </div>
                <div>
                    <div
                        className="rounded-full h-[18vh]  w-[4rem] bg-cover"
                        style={{ backgroundImage: `url(${kato})` }}
                    ></div>
                    <p className="my-3">Beaches</p>
                </div>
                <div>
                    <div
                        className="rounded-full h-[18vh]  w-[4rem] bg-cover"
                        style={{ backgroundImage: `url(${kato})` }}
                    ></div>
                    <p className="my-3">Beaches</p>
                </div>
                <div>
                    <div
                        className="rounded-full h-[18vh]  w-[4rem] bg-cover"
                        style={{ backgroundImage: `url(${kato})` }}
                    ></div>
                    <p className="my-3">Beaches</p>
                </div> */}
            </div>
        </div>
    )
}
export default Thingtodo;