 import './App.css';
 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import App from './patientlist';
 import PatientForm from './patientform';
 import Navbar from './components/Navbar';
 
 function Show()  {
   return (
    
       <div>
        
          <Router>
           <Navbar/>
            <Routes>
             <Route path="/list" element={<App/>} />
              <Route path="/add" element={<PatientForm/>} />
            </Routes>
            </Router>
         
       </div>
    
   );
 }
 
 
 export default Show;
 





 
 /*App.jsx
import React, { useState, useEffect, Component } from 'react';

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
*/
/*
function FormularioAgregarPaciente() {
    const [name, setNombre] = useState('');
    const [age, setEdad] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/myapp/api/patient/', {
                name: name,
                age: age,
               
            });
            console.log('Paciente agregado:', response.data);
            // Puedes mostrar un mensaje de éxito aquí
        } catch (error) {
            console.error('Error al agregar paciente:', error);
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={name} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <label>
                Edad:
                <input type="number" value={age} onChange={(e) => setEdad(e.target.value)} />
            </label>
            
            <button type="submit">Agregar Paciente</button>
        </form>
    );
}

export default FormularioAgregarPaciente;
*/


/*

class PatientForm extends Component {
  state = {
    name: '',
    dni: '',
    age: '',
    idConsultation: '',
    idDoctor: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, dni, age, idConsultation, idDoctor } = this.state;

    axios.post('http://127.0.0.1:8000/myapp/api/patient/', {
      name,
      dni,
      age,
      idConsultation,
      idDoctor: [idDoctor] // Convertimos idDoctor en un array, ya que es un campo de múltiples valores
    })
    .then((response) => {
      console.log(response.data);
      alert('Patient added successfully!');
    })
    .catch((error) => {
      console.error('Error adding patient:', error);
      alert('Failed to add patient. Please try again.');
    });
  }

  render() {
    const { name, dni, age, idConsultation, idDoctor } = this.state;

    return (
      <div>
        <h2>Add New Patient</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            DNI:
            <input type="text" name="dni" value={dni} onChange={this.handleChange} />
          </label>
          <label>
            Age:
            <input type="text" name="age" value={age} onChange={this.handleChange} />
          </label>
          <label>
            Consultation ID:
            <input type="text" name="idConsultation" value={idConsultation} onChange={this.handleChange} />
          </label>
          <label>
            Doctor ID:
            <input type="text" name="idDoctor" value={idDoctor} onChange={this.handleChange} />
          </label>
          <button type="submit">Add Patient</button>
        </form>
      </div>
    );
  }
}

export default PatientForm;

*/