
import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';


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
        <div className='center justify-content-center principal'>
        
          <h2 className='titulo'>AGREGAR PACIENTES</h2>
          <form onSubmit={this.handleSubmit}>
            
          <div className='center justify-content-center'>
            <div className='row'>

            <div className='col-3 form-label'>
            <label >
              Nombre:
              <input type="text" name="name" className='form-control' value={name} onChange={this.handleChange} />
            </label>
            </div>

            <div className='col-3 form-label'>
            <label >
              DNI:
              <input type="text" name="dni" className='form-control' value={dni} onChange={this.handleChange} />
            </label>
            </div>

            <div className='col-3 form-label'>
            <label >
              Edad:
              <input type="text" name="age" className='form-control' value={age} onChange={this.handleChange} />
            </label>
            </div>

            <div className='col-3 form-label'>
            <label >
              Doctor:
              <input type="text" name="idDoctor" className='form-control' value={idDoctor} onChange={this.handleChange} />
            </label>
            </div>
            </div>

            <div className='row'>
              <div className='col form-label'>
              <label >
                Consulta:
                <input type="text" name="idConsultation" className='form-control'value={idConsultation} onChange={this.handleChange} />
              </label>
              </div>

              <div className='col'>
                <button type="submit" className="btn btn-primary">Agregar Paciente</button>
              </div>


            </div>

            </div>
           
          </form>
        </div>
      
      );
    }
  }
  
  export default PatientForm;
  