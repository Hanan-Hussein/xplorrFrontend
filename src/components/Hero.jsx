import '../css/hero.css'
import houseImage from '../assets/House.jpg'
import NavBar from "./NavBar"
import kato from "../assets/kato.jpg"
import china from "../assets/temple.jpg"
function HeroSection() {
    return (
        <>
            <div className="bg-vacationbackground h-screen bg-cover">

                <div className='mx-auto'>
                    <NavBar />
                    <div className='mid-text text-center text-white'>
                        <p className='kato  text-5xl font-bold tracking-widest mb-3'>Transform Your Dream Goals <br></br> into Unforgettable Vacations!</p>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. <br></br>
                            Ultricies ullamcorper molestie</p>

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
            <div className='container mx-auto'>
                <p className='font-bold tracking-wide'>Things to do</p>
                <div className='grid grid-cols-4 gap-4'>
                    
                </div>

            </div>
            {/* <div className='container mx-auto'>
                <p className='m-5 font-bold tracking-wide'>Popular Destination</p>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='mb-5 '>
                        <img class="mb-2  object-scale-down h-50 max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale" src={china} alt="image description" />
                        <p className=''>Temple Of China</p>
                    </div>
                    <div className='mb-5 object-contain h-80'>
                        <img class="mb-2  max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale" src={china} alt="image description" />
                        <p className='text-center'>Temple Of China</p>
                    </div>
                  
                   
                </div>

            </div> */}
        </>
    )
}
export default HeroSection;