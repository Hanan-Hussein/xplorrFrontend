import NavBar from "./NavBar";
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react"
import axios from "axios";
import locationImage from "../assets/location.svg"
import CallAction from "./callAction";
import '../css/destinationdetails.css'
import travel from '../assets/travel.jpeg'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
function DestinationDetails() {

    let { id } = useParams();

    const [descriptions, setDescriptions] = useState({})
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    React.useEffect(() => {
        axios.get(`http://localhost:8000/category_details?loc=${id}`)
            .then((response) => {
                setDescriptions(response.data[0])
            })
    }, [id])
    return (
        <>
            <div className="h-[60vh] bg-center bg-no-repeat mb-10" style={{ backgroundImage: "url(" + "https://res.cloudinary.com/hanancodes/" + descriptions.descriptionBackground + ")" }}>
                <NavBar />

            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-2 justify-items-end">
                    <div className="description">
                        <p className="font-bold text-2xl mb-5">
                            {descriptions.descriptionTitle}
                        </p>
                        <p> {descriptions.description}</p>
                    </div>
                    <div>
                        <button onClick={openModal} className="rounded-none bg-textBrand p-3 mt-3 text-white tracking-widest">Save For A Trip</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h1 id="heading" className="font-bold mb-7 text-center">Save For Trip</h1>
                            <form>
                                <label class="block text-gray-700 text-sm " for="username">
                                    Goal Name
                                </label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Goal Name" />

                                {/* <input type="text" placeholder="Name of the goal" /> */}
                                <div className="text-center mt-5">
                                    <button className="rounded-none bg-textBrand p-3 mt-3 text-white tracking-widest">Create Goal</button>

                                </div>


                            </form>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )

}
export default DestinationDetails;