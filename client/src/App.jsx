// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
   


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






    //busqueda
    const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }



  let results = []
  if(!search)
  {

    results = data
}else{
    results = data.filter((dato) =>
    
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    
    )

  }



    return (



       
    
      <div className='center row justify-content-center'>
        <div class="col-4">
        <h1>PACIENTES DEL CENTRO MEDICO</h1>

          <div className='input '>
           <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control'></input>

          </div>



             { results.map(item => (


                <div >
                    

                     
                        <div key={item.id}>


                        <ul className="list-group">
                        <li className="list-group-item active">{item.name}</li>
                        <li className="list-group-item">DNI: {item.dni}</li>
                        <li className="list-group-item">EDAD: {item.age}</li>
                        <li className="list-group-item">DOCTOR: {item.idDoctor}</li>
                        <li className="list-group-item">CONSULTA: {item.idConsultation}</li>
                        </ul>

                        </div>    

                  

            
                  </div>
                  

              ))}
         



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
                      <p>FECHA:  {item3.date} </p>
                      <p>DIACNOSTICO: {item3.diagnosis}</p>
                      <p>TRATAMIENTO: {item3.treatment}</p>
                       
                  </div>
              ))
          ) : (
              <p>No hay datos disponibles</p>
          )}



</div>
      </div>
  );
}




export default App;