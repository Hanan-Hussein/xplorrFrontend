import '../css/hero.css'
import houseImage from '../assets/House.jpg'
function HeroSection() {
    return (
        <div className="container mx-auto">

            <div className='bg-herobackground heroBackground '>
               <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <p>Transform Your Dream</p>
                    <div className='houseImage'>
                    <img className='' src={houseImage}/>
                    </div>

                </div>
                <div>
                    <p>Goal</p>
                </div>
               </div>
            </div>
        </div>
    )
}
export default HeroSection;