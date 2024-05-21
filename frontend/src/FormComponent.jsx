import React, { useState } from 'react';
import axios from 'axios';
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: ''
    // email: '',
    // message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    axios.post('http://54.226.49.106:8080/submit-form', formData)
      .then(response => {
        console.log('Data successfully inserted', response);
        // Optionally reset the form
        setFormData({
          first_name: ''
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
