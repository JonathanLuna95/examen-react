import './JugadorCard.css';

function JugadorCard({ jugador }){
    return (
        <article className="jugador-card">
            <div className="card-header-bar">
                <div className="card-top-multicolor"></div>
                <span className="card-number-badge">#{jugador.number}</span>
            </div>
            <div className="card-image-box">
                <img src={jugador.photoUrl} alt={jugador.name} className="card-image" />
            </div>
            <div className="card-body">
                <h3 className="card-name">{jugador.name}</h3>
                <div className="card-details">
                    <p className="card-detail-item"><strong>Club:</strong> <span>{jugador.currentClub}</span></p>
                    <p className="card-detail-item"><strong>Selección:</strong> <span>{jugador.nationalTeam}</span></p>
                    <p className="card-detail-item"><strong>Posición:</strong> <span>{jugador.position}</span></p>
                    <p className="card-detail-item"><strong>Edad:</strong> <span>{jugador.age} años</span></p>
                </div>
            </div>
        </article>
    );
}

export default JugadorCard;