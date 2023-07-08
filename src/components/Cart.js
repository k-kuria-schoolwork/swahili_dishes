import React from 'react'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OrderReciept from './OrderReciept';

function Cart() {

  const [showReciept, setShowReciept] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [customerLocation, setCustomerLocation] = useState('')
  const [orderDetails, setOrderDetails] = useState([])


  //function to handle order placement
  const handlePlaceOrder = () =>{
      //prompt customer to enter their name
      const customerName = prompt('Please enter your name!')
      const customerLocation = prompt('Please give a descriptive location!')


      //Set customername, location and orderdetails
      setCustomerName(customerName)
      setCustomerLocation(customerLocation)
      setOrderDetails(items); // Convert items array to a string

      //show receipt modal
      setShowReciept(true)
  }


  //function to close the reciept modal
  const handleCloseReciept = () =>{
      setShowReciept(false)
  }




    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;

      // Calculate the total quantity of goods in the cart
      const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  
    return (
      <div className='cartheader'>
        <div className='cartmoving'>
          <Link to='/services'>
          <i class="fa-solid fa-circle-left"></i>
          </Link>

        <button class="btn">
        <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
        </svg>
      </button>
        </div>
       
        <div className='cartcontainer'>
<div class="cartcard">
<div class="header">
						{/* <span class="title">Cart ({totalUniqueItems})</span> */}
						<span class="price">Cart ({totalUniqueItems})</span>
					</div>
					<p class="desc">Thank You  for Shopping With Us</p>
          <table className='carttable'>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          {item.quantity}
          <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td>{parseFloat(item.price).toFixed(2)}</td>
        <td>
          <button id="dustbin" onClick={() => removeItem(item.id)}>
            <i className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



					
          <span class="title">Total Price: Ksh{totalPrice.toFixed(2)}</span>
					<button onClick={handlePlaceOrder} type="button" class="action">Make Order</button>

            {/* Receipt Modal */}
  <OrderReciept
             isOpen={showReciept}
             onClose={handleCloseReciept}
             customerName={customerName}
             customerLocation={customerLocation}
             orderDetails={orderDetails}
      />
				</div>




        </div>

      </div>
    );
  }

export default Cart
