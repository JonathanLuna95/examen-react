import { useState, useEffect } from "react";
import JugadorCard from "./JugadorCard";
import "./JugadorList.css";

function JugadorList({ onCargados }) {
    const [jugadores, setJugadores] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setCargando(true);

        fetch('https://jugadores.up.railway.app/players')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then((resultado) => {
                const lista = resultado.data;
                setJugadores(lista);
                if (onCargados) {
                    onCargados(lista.length);
                }
            })
            .catch((errorPeticion) => {
                setError(errorPeticion.message);
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return (
            <div className="panel-estado panel-cargando">
                <div className="spinner"></div>
                <h2>Los jugadores están cargando</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="panel-estado panel-error">
                <h2>No se pudo conectar a la API: {error}</h2>
            </div>
        );
    }

    return (
        <section className="jugadores-seccion">
            <div className="seccion-header">
                <h2 className="seccion-titulo">LOS PROTAGONISTAS DE LA FINAL</h2>
                <p className="seccion-subtitulo">Conoce a los jugadores convocados de Argentina y España.</p>
            </div>
            <div className="jugadores-grid">
                {jugadores.map((jugador) => (
                    <JugadorCard key={jugador.id} jugador={jugador} />
                ))}
            </div>
        </section>
    );
}

export default JugadorList;