//componente de 5 estrellas con el prop "q" que define la cantidad de estrellas a color que aparecen
import { AiFillStar } from 'react-icons/ai';
import styles from './styles.module.css';

export const Stars = ({ q }) => {
    const stars = [];
    for (let i = 0; i < q; i++) {
        stars.push(<AiFillStar key={i} className={styles.star} />);
    }
    while (stars.length < 5) {
        stars.push(<AiFillStar key={stars.length} className={styles.starEmpty} />);
    }
    return <>{stars}</>;
};


export default Stars;