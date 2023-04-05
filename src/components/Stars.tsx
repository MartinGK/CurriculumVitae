//componente de 5 estrellas con el prop "q" que define la cantidad de estrellas a color que aparecen

export const Stars = ({ q }) => {
    const stars = [];
    for (let i = 0; i < q; i++) {
    stars.push(<span key={i} className="star" />);
    }
    return <>{stars}</>;
};


export default Stars;