import React from 'react'
import ReactModal from 'react-modal'


function OrderReciept({isOpen, onClose, customerName,customerLocation, orderDetails}) {
    
  return (
    <div className='reciept'>

          {/*styling the prompt card*/}
          {/* <div className='prompt-card'>
              <h3>Please enter your details</h3>
              <label>
                Name:
                <input type='text' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
              </label>
              <label>
                Location:
                <input type='text' value={customerLocation} onChange={(e)=> setCustomerLocation(e.target.value)}/>
              </label>
              <button onClick={handlePlaceOrder}>Submit</button>
            </div> */}


      <ReactModal isOpen={isOpen} onRequestClose={onClose}>
            <h2>reciept</h2>
            <p>Customer Name: {customerName}</p>
            <p>Customer location: {customerLocation}</p>
            <h3>Order Details:</h3>
        <ul>
          {orderDetails.map((item) => (
            <li key={item.id}>
              <span>Name: {item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Total: {item.itemTotal}</span>
            </li>
          ))}
        </ul>        
    <button onClick={onClose}Close>CLOSE</button>
      </ReactModal>
    </div>
  )
}

export default OrderReciept
