import { useState, useEffect } from "react";
import JugadorCard from "./JugadorCard";

function JugadorList({ onCargados }) {
    const [jugadores, setJugadores] = useState([]); //Esto cambia por que aqui van las variables de estado de jugadores o lo que 
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
    }, [])
    if(cargando){
        return(<div>
            <h1>Los jugadores estan cargando</h1>
        </div>);
    }
    if(error){
        return(<div>
            <h1>No se pudo conectar a la Api :{error}</h1>
        </div>
        );
    }
    return (<div>
        <h1>Seccion de Jugadores</h1>
        <div>
            {jugadores.map((jugador)=>(
                <JugadorCard key={jugador.id} jugador={jugador}/>
            ))} 
        </div>
    </div>)
}

export default JugadorList