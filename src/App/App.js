import React from 'react';
import './App.css';
import Form from '../Form/Form'

const App = () => {
  const game = false;
  if(game) {
    return (
      <main className='App'>
        <div className='Page'>
          <section className='header'>
            <div className='question-number'>Question Number</div>
            <div className='category'>Category</div>
            <div className='lives'>Lives</div>
          </section>
        <section className='body'>
          <div className='chalkboard'>Chalkboard</div>
        </section>
      </div>
    </main>
    )
  }
  
  return (
    <main className='App'>
    <Form />
    </main>
  )
}
export default App;