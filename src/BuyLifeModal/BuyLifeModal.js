import React from 'react'
import './BuyLifeModal.css'

const BuyLifeModal = (props) => {
  return (
    <section className='buy-life-modal nes-container is-rounded'>
      <h2>Buy Life?</h2>
      <p>Buying an extra life costs 300 points.  Do you wish to continue?</p>
      <button className='nes-btn yes-life' onClick={props.buyLife}>Yes</button>
      <button className='nes-btn no-life' onClick={props.toggleBuyLifeModal}>No</button>
    </section>
  )
}

export default BuyLifeModal