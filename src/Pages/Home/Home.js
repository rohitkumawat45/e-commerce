import React from 'react'
import Products from '../../components/Products/Products'
import './home.css'

export default function Home() {
  return (
    <div className='home-wrapper'>
      <h1 className='banner'>What's new</h1>
      <section>
        <Products/>
      </section>
    </div>
  )
}
