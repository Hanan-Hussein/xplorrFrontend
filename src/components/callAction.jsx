import boats from '../assets/boats.jpg'
import '../css/description.css'
import cards from '../assets/cards.svg'
import '../css/callAction.css'
function CallAction() {
    return (
        <div className='bg-callActionBackground h-[50vh] bg-cover over my-12'>
            <div className='mx-auto'>
                <div className='action'>
                    <p className='text-center text-white tracking-widest text-2xl'>
                        Reach New Horizons: Experience Unparalleled <br></br>
                        Adventures on Your Goal Vacation!
                    </p>
                    <p className='text-center mt-3 text-white'>Lorem ipsum dolor sit amet consectetur. Ultricies
                        <br></br> ullamcorper molestie</p>
                    <div className='flex justify-center'>
                        <button class="rounded-none bg-textBrand p-3 mt-3 text-white tracking-widest">Save Changes</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CallAction;