import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const Pill = () => {
    return <div
        className="flex items-center rounded-full bg-primary pl-4 pr-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
        <BsPlusLg className="inline-block mr-2" />
        <h3>Politicians daily game by score</h3>
    </div>
}

export default Pill;