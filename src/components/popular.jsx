import kato from "../assets/kato.jpg";
import china from "../assets/temple.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
function Popular() {
    const [popular, setpopular] = useState([])
    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/popular`)
            .then((response) => {
                setpopular(response.data)
            })
    })
    return (
        <div className="container mx-auto mt-12 my-10">
            <p className="mb-7 font-bold tracking-wide">Popular Destination</p>
            <div className="grid grid-cols-1 mx-4 md:grid-cols-4 gap-5">

                {popular.map((pop) => {
                    return (
                        <div className="mb-5 ">
                            <img
                                class="mb-2  transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale md:h-[40vh] md:w-[20vw]"
                                src={`https://res.cloudinary.com/hanancodes/${pop.sight}`}
                                alt="image description"
                            />
                            <p className="text-center">{pop.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Popular;