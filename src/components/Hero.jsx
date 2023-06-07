import "../css/hero.css";
import houseImage from "../assets/House.jpg";
import NavBar from "./NavBar";
import kato from "../assets/kato.jpg";
import china from "../assets/temple.jpg";
import Thingtodo from "./Thingstodo";
function HeroSection() {
    return (
        <>
            <div className="bg-vacationbackground h-screen bg-cover">
                <div className="mx-auto">
                    <NavBar />
                    <div className="mid-text text-center text-white">
                        <p className="kato  md:text-5xl font-bold tracking-widest mb-3">
                            Transform Your Dream Goals <br></br> into Unforgettable Vacations!
                        </p>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. <br></br>
                            Ultricies ullamcorper molestie
                        </p>
                    </div>
                </div>
                {/* Top destinations */}

                {/* <div className='container mx-auto '>
                    <div className='grid-cols-3'>
                        <div>
                            <p className='leading-loose font-medium text-2xl'>
                                From Dreaming to Doing <br></br>
                                Saving Strategies for the  <br></br>
                                Vacation of a Lifetime
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
            <Thingtodo />
            <div className="container mx-auto mt-12">
                <p className="mb-7 font-bold tracking-wide">Popular Destination</p>
                <div className="grid grid-cols-4 gap-5">
                    <div className="mb-5 ">
                        <img
                            class="mb-2 md:h-[40vh] md:w-[20vw] transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale"
                            src={china}
                            alt="image description"
                        />
                        <p className="text-center">Temple Of China</p>
                    </div>

                    <div className="mb-5 ">
                        <img
                            class="mb-2 md:h-[40vh] md:w-[20vw] transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale"
                            src={kato}
                            alt="image description"
                        />
                        <p className="text-center">Temple Of China</p>
                    </div>
                    <div className="mb-5 ">
                        <img
                            class="mb-2 md:h-[40vh] md:w-[20vw] transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale"
                            src={china}
                            alt="image description"
                        />
                        <p className="text-center">Temple Of China</p>
                    </div>
                    <div className="mb-5 ">
                        <img
                            class="mb-2 md:h-[40vh] md:w-[20vw] transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale"
                            src={kato}
                            alt="image description"
                        />
                        <p className="text-center">Temple Of China</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeroSection;
