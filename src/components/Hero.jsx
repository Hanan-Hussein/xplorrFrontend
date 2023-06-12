import "../css/hero.css";
import houseImage from "../assets/House.jpg";
import NavBar from "./NavBar";
import kato from "../assets/kato.jpg";
import china from "../assets/temple.jpg";
import Thingtodo from "./Thingstodo";
import Popular from './popular'
import Description from './description'
import CallAction from './callAction'
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
         <Popular/>
         <Description/>
         <CallAction/>

        </>
    );
}
export default HeroSection;
