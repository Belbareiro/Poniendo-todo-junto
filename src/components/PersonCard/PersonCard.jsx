import React, { useState } from 'react';

function PersonCard({ firstname, lastname, age, haircolor }) {
    // Convertir 'age' a número usando 'parseInt' si es una cadena
    const [currentAge, setCurrentAge] = useState(parseInt(age, 10));
    console.log(currentAge)

    const handleBirthday = () => {
        setCurrentAge(currentAge + 1);
    };

    return (
        <div className="personCard">
            <h2>{lastname}, {firstname}</h2>
            <p>Age: {currentAge}</p>
            <p>Haircolor: {haircolor}</p>
            <button onClick={handleBirthday}>Boton de cumpleaños de {firstname}</button>
        </div>
    );
}

export default PersonCard;
