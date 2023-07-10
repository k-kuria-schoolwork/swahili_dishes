import React from 'react'
import ReactModal from 'react-modal'


function OrderReciept({isOpen, onClose, customerName,customerLocation, orderDetails}) {
    
      // Calculate the total quantity of goods in the cart
      const totalPrice = orderDetails.reduce((total, item) => total + item.price * item.quantity, 0);

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
            <h2>Mwanaz Bitez</h2>
            <h5>Best Swahili Dishes</h5>
            <p>Kahawa Wendani</p>
            <p>Host: Mwanajuma</p>
            <p>Order: 31 11:43am</p>

            <p>Customer Name: {customerName}</p>
            <p>Customer location: {customerLocation}</p>
            <h3>Order Details:</h3>
        <ul>

          <table>
            <thead>
            <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total</th>    
             </tr>
            </thead>
            <tbody>
              {
                orderDetails.map((item) => (
                  <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.itemTotal}</td>
                  </tr>
                ))
              }
            </tbody>
            <p>Subtotal: {totalPrice}</p>

          </table>
        </ul>        
    <button onClick={onClose}Close>CLOSE</button>
      </ReactModal>
    </div>
  )
}

export default OrderReciept
