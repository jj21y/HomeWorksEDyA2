import { useEffect } from "react";


function EjemploMontaje (){
    useEffect(() => {
        console.log("El componente se monto")
    }, []);

    return <h2>Ejemplo Montaje</h2>

}

export default EjemploMontaje;