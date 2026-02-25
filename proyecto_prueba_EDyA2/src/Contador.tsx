import { useState } from "react";


interface Props{
    initialValue: number
}

function Contador ({initialValue}: Props){
    const [contador, setContador] = useState(initialValue); //esta es una variable de estado

    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
            Sumar
        </button>
        <button onClick = {() => setContador(contador - 1)}>
            Restar
        </button>
        <button onClick = {() => setContador(initialValue)}>
            Restart
        </button>
        </>
    );
}

export default Contador;