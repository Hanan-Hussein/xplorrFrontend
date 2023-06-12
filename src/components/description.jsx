import boats from '../assets/boats.jpg'
import '../css/description.css'
import cards from '../assets/cards.svg'
function Description() {
    return (
        <div className='container mx-auto my-8'>

            <p className='mb-10 capitalize leading-loose tracking-widest text-2xl'>From Dreaming to Doing Saving <br></br>
                Strategies for the Vacation of a Lifetime</p>
            <div className='flex justify-center h-[60vh]'>
                <img src={cards} />
            </div>

        </div>


    )

}
export default Description;