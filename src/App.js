import React from 'react'
import Card from './Components/Card'
import CreditCard from './Components/CreditCard'
import Form from './Components/Form'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Card />
        <Form />
      </div>
      <div>
        <CreditCard />
      </div>
    </div>
  );
}

export default App;
