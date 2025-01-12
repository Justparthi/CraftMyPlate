import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <div className='place-order'>
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name' />
      </div>
      <input type="text" placeholder='email address' />
      <input type="text" placeholder='street' />
      <div className="multi-fields">
        <input type="text" placeholder='city'/>
        <input type="text" placeholder='state'/>
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='zipcode'/>
        <input type="text" placeholder='country' />
      </div>
      <input type="text" placeholder='phone'/>
      </div>
      <div className="place-order-right">

      </div>
    </div>
  )
}

export default PlaceOrder
