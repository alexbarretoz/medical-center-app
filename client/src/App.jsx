// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
   


    useEffect(() => {
        axios.get('http://localhost:8000/myapp/api/patient/')
        .then(response => {
            setData(response.data);  // Asegúrate de que response.data contenga los datos que esperas
        })
        .catch(error => console.error('Error:', error));
    }, []);

    const [data2, setData2] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/myapp/api/doctor/')
        .then(response => {
            setData2(response.data);  // Asegúrate de que response.data contenga los datos que esperas
        })
        .catch(error => console.error('Error:', error));
    }, []);



    const [data3 , setData3] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/myapp/api/consultation/')
        .then(response => {
            setData3(response.data);  // Asegúrate de que response.data contenga los datos que esperas
        })
        .catch(error => console.error('Error:', error));
    }, []);







    return (
      <div>
          {data && data.length > 0 ? (
              data.map(item => (
                  <div key={item.id}>
                      <p>PACIENTE: {item.name}</p>
                      <p>DNI: {item.dni}</p>
                      <p>EDAD: {item.age}</p>
                      <p>DOCTOR: {item.idDoctor}</p>
                      <p>CONSULTA: {item.idConsultation}</p>
                      
                      
                  </div>
              ))
          ) : (
              <p>No hay datos disponibles</p>
          )}




            {data2 && data2.length > 0 ? (
              data2.map(item2 => (
                  <div key={item2.id}>
                      <p>DOCTOR: {item2.name}</p>
                      <p>ESPECIALIDAD: {item2.especiality}</p>
                       
                  </div>
              ))
          ) : (
              <p>No hay datos disponibles</p>
          )}


            {data3 && data3.length > 0 ? (
              data3.map(item3 => (
                  <div key={item3.id}>
                      <p>DIACNOSTICO: {item3.diagnosis}</p>
                      <p>TRATAMIENTO: {item3.treatment}</p>
                       
                  </div>
              ))
          ) : (
              <p>No hay datos disponibles</p>
          )}




      </div>
  );
}




export default App;








