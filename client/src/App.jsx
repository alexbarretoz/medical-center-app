





import React, { useRef, useState } from 'react';
import axios from 'axios';

function SearchPatient() {
    const dniRef = useRef(null);
    const [patient, setPatient] = useState(null);

    const handleSearch = async () => {
        const dni = dniRef.current.value;
        try {
            const response = await axios.get(`http://localhost:8000/myapp/api/patient/?dni=${dni}`);
            setPatient(response.data);
        } catch (error) {
            console.error('Error al buscar paciente:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                ref={dniRef}
                placeholder="Ingrese DNI del paciente"
            />
            <button onClick={handleSearch}>Buscar</button>
            {patient && (
                <div>
                    <h2>Datos del paciente</h2>
                    <p>Nombre: {patient.name}</p>
                    <p>DNI: {patient.dni}</p>
                    <p>Afecciones: {patient.afecciones}</p>
                    {/* Agrega más campos según la estructura de tu objeto de paciente */}
                </div>
            )}
        </div>
    );
}

export default SearchPatient;












