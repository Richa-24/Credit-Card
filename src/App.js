import React from 'react'
import Card from './Components/Card'
import CreditCard from './Components/CreditCard'
import Form from './Components/Form'
import style from './card.module.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={style.formCard}>
        <Card />
        <Form />
      </div>
      <div style={{ margin: '0px auto 0px auto' }}>
        <CreditCard />
      </div>
    </div>
  );
}

export default App;
