import '../css/hero.css'
import houseImage from '../assets/House.jpg'
import NavBar from "./NavBar"
import kato from "../assets/kato.jpg"

function HeroSection() {
    return (
        // <div className="container mx-auto">

            <div className='container mx-auto bg-herobackground h-screen bg-cover'>
            {/* <NavBar /> */}

               {/* <div className='flex justify-between items-center'> */}
                {/* <div className='flex justify-between items-center'>
                    <p>Transform Your Dream</p>
                    <div className='houseImage w-full'>
                    <img className='' src={houseImage} />
                    </div>

                </div> */}
                {/* <div>
                    <p>Goal</p>
                </div> */}
               {/* </div> */}
               <div className='grid grid-cols-3 gap-4 items-center'>
                <div>
                    <p>Transform your Dream Goals</p>
                </div>
                <div className='col-span-3 md:col-span-1'>
                    <img src={houseImage} className='kato'/>
                    
                </div>
                <div>
                    <p>Goal</p>

                </div>

               </div>
               <div>
               {/* <img src={houseImage} className=''/> */}

               </div>
            {/* </div> */}
        </div>
    )
}
export default HeroSection;