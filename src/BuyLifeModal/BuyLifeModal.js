import React from 'react'
import './BuyLifeModal.css'

const BuyLifeModal = (props) => {
  return (
    <section className='buy-life-modal'>
      <h2>Buy Life?</h2>
      <p>Buying an extra life costs 300 points.  Do you wish to continue?</p>
      <button className='nes-css yes-life' onClick={props.buyLife}>Yes</button>
      <button className='nes-css no-life' onClick={props.toggleBuyLifeModal}>No</button>
    </section>
  )
}

export default BuyLifeModal