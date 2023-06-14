import NavBar from "./NavBar";
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from "axios";
import "../css/categorydetails.css"
import locationImage from "../assets/location.svg"
import CallAction from "./callAction";
function CategoryDetails() {
    let { name } = useParams();
    const [destinationName, setdestinationName] = useState("");
    const [destinations, setDestinations] = useState([])
    const my_text = "Here is some basic text...\n...with a line break."

    React.useEffect(() => {
        axios.get(`http://localhost:8000/destination_details?category=${name}`)
            .then((response) => {
                setDestinations(response.data)
            })
    }, [name])
    React.useEffect(() => {
        axios.get(`http://localhost:8000/filter_category?id=${name}`)
            .then((response) => {
                setdestinationName(response.data[0].name)
            })
    }, [name])
    console.log(destinations);
    return (
        <>
            <div className="bg-testBackground  h-[60vh]  bg-cover">
                <NavBar />
                <div className="desName">
                    <p className="text-white text-4xl font-bold">{destinationName}</p>

                </div>

            </div>
            <div className="container mx-auto my-[4rem]  xl:px-[32em]">
                <p className="text-center mx-5">
                    Lorem ipsum dolor sit amet consectetur. Ultricies ullamcorper molestie Lorem ipsum dolor sit.Lorem ipsum dolor sit amet consectetur. Ultricies ullamcorper molestie Lorem ipsum dolor sit
                </p>
            </div>

            <div className="container mx-auto grid md:grid-cols-3">
                {destinations.map((destination) => {
                    return (
                        <div className="mb-5 ">
                            <NavLink to={'/category/details/' + destination.id}>
                                <img
                                    class="mb-2  transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale md:h-[40vh] md:w-[20vw]"
                                    src={`https://res.cloudinary.com/hanancodes/${destination.sight}`}
                                    alt="image description"
                                />

                                <p className="">{destination.name}</p>

                            </NavLink>

                            <div className="flex">
                                <img src={locationImage} />
                                <p className="ml-2">{destination.location}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>

            </div>
            <CallAction />
        </>
    )
}
export default CategoryDetails;