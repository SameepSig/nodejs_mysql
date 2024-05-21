import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://54.226.49.106:8080/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{padding: "50px"}}>
      <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Joined At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.first_name}</td>
              <td>{d.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormComponent />      
    </div>
  );
}

export default App;