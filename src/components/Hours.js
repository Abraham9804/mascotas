// Placeholder to host a component
import React, { useState, useEffect } from 'react';

const OpeningHours = () => {
    const [hours, setHours] = useState('');

    useEffect(() => {
        const today = new Date().getDay();
        let openingHours;

        switch (today) {
            case 0: // Domingo
            case 6: // Sábado
                openingHours = '9 a.m. - 8 p.m.';
                break;
            case 1: // Lunes
            case 2: // Martes
            case 3: // Miércoles
            case 4: // Jueves
            case 5: // Viernes
                openingHours = '10 a.m. - 4 p.m.';
                break;
            default:
                openingHours = 'Cerrado';
        }

        setHours(openingHours);
    }, []);

    return (
        <div>
            <h2>Horario de Hoy:</h2>
            <p>{hours}</p>
        </div>
    );
};

export default OpeningHours;
