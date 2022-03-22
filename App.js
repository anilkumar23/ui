import React from 'react'
import JsonData from './data.json'
// import './App.css';
import Table from 'react-bootstrap/Table'
function App() {
  const DisplayData = JsonData.map(
    (info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.name}</td>
          <td>{info.city}</td>
        </tr>
      )
    }
  )
  return (
    <div>
      <Table stripped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {DisplayData}
        </tbody>
      </Table>
    </div>
  )
}

export default App;