import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';

export const Footer = () => {
    return <footer className="mt-auto">
        <div>
            <div className="text-8xl flex mx-15 justify-center">
                <AiFillGithub className="text-white" />
                <BsStackOverflow className="text-orange-500 mx-20" />
                <AiFillLinkedin className="text-blue-600" />
            </div>
            <span className="flex justify-center pt-5 text-2xl">MartinGK © Copyright 2023</span>
        </div>
    </footer>
}

export default Footer;