import React from 'react'

const GameOver = (props) => {
  return (
    <section className='game-over'>
      <h2>GAME OVER</h2>
      <p>Score: {props.lives}</p>
      {props.lives > 0 && <p>Lives Left: {props.lives}</p>}
      <button>Home</button>
    </section>
  )
}

export default GameOver