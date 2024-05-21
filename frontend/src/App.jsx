import React from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch(`sameep-database-rds-mysql-1.cmuokqciitb8.us-east-1.rds.amazonaws.com:8080/users`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{padding: "50px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Joined At</th>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.first_name}</td>
              <td>{d.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default App