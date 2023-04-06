import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import styles from './styles.module.css'


export const Footer = () => {
    return <footer className={styles.footer}>
        <div>
            <span>Copyright © MartinGK  2023</span>
            <div className={styles.contactContainer}>
                <AiFillGithub /> 
                <BsStackOverflow />
                <AiFillLinkedin />
            </div>
        </div>
    </footer>
}

export default Footer;