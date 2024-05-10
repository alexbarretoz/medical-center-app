
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
  