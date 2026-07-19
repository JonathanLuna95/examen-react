import './JugadorCard.css';

function JugadorCard({ jugador }){
    return (
        <article className="jugador-card">
            <img src={jugador.photoUrl} alt={jugador.name} />
            <h2>{jugador.name}</h2>
            <p>Club: {jugador.currentClub}</p>
            <p>Selección: {jugador.nationalTeam}</p>
            <p>Posición: {jugador.position}</p>
            <p>Número: {jugador.number}</p>
            <p>Edad: {jugador.age}</p>
        </article>
    );
}

export default JugadorCard;