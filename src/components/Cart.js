import React from 'react'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import OrderReciept from './OrderReciept';
function Cart() {

  const [showReciept, setShowReciept] = useState(false)
  const [customerNumber, setcustomerNumber] = useState('')
  const [customerLocation, setCustomerLocation] = useState('')
  const [orderDetails, setOrderDetails] = useState([])
  

  //function to handle order placement
  const handlePlaceOrder = () =>{
      //prompt customer to enter their name
      const customerNumber = prompt('Please enter your Number!')
      const customerLocation = prompt('Please your Location')


      //Set customerNumber, location and orderdetails
      setcustomerNumber(customerNumber)
      setCustomerLocation(customerLocation)
      setOrderDetails(items); // Convert items array to a string
    // Clear the cart after order confirmation

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


      


    if (isEmpty) return <p >
     <h3 className='emptycart'>
     Your cart is empty
      </h3> 
      <Link to='/services'>
      <button className='cartbtn4'>go back</button>
      </Link>
      </p>;

      // Calculate the total quantity of goods in the cart
      const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  
    return (
      <div className='cartheader'>
        <div className='cartmoving'>
          <Link to='/services'>
          <i class="fa-solid fa-circle-left"></i>
          </Link>

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
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
            <i id='addbtn' className="fa-solid fa-minus"></i>
          </button>
          {item.quantity}
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
            <i id='addbtn' className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td>{parseFloat(item.quantity * item.price).toFixed(2)}</td>
        <td>
          <button  id="dustbin" onClick={() => removeItem(item.id)}>
            <i  className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



					
          <span class="title">Total Price:<span className='price2'>Ksh{totalPrice.toFixed(2)}</span> </span>
					<button onClick={handlePlaceOrder} type="button" class="action">Place Order</button>

            {/* Receipt Modal */}
  <OrderReciept
             isOpen={showReciept}
             onClose={handleCloseReciept}
             customerNumber={customerNumber}
             customerLocation={customerLocation}
             orderDetails={orderDetails}
      />
				</div>




        </div>

      </div>
    );
  }

export default Cart
