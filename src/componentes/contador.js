import React, { useState, useEffect } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setContador(prevContador => prevContador + 1);
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <h1>contador: {contador}</h1>
        </div>
    );
}

export default Contador;
