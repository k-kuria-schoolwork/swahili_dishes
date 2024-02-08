import React from 'react'
import ReactModal from 'react-modal'
import emailjs from 'emailjs-com'
import { useNavigate } from 'react-router-dom';
import {  useCart } from 'react-use-cart';
import alertify from 'alertifyjs' ;

function OrderReciept({isOpen, onClose, customerNumber,customerLocation, orderDetails}) {
  const navigate = useNavigate();
  const { emptyCart} = useCart()

  
  const generateReceiptHTML = (customerNumber, customerLocation, orderDetails) => {
    const orderItems = orderDetails.map((item) => `${item.quantity} x ${item.name} - ${item.price}`);
    const totalPrice = orderDetails.reduce((total, item) => total + item.itemTotal, 0);
  
    return `
      <h2>Order Receipt</h2>
      <p>Customer Name: ${customerNumber}</p>
      <p>Customer Location: ${customerLocation}</p>
      <h3>Order Details:</h3>
      <ul>
        ${orderItems.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    `;
  };
  
  
  
  
  const sendReceiptEmail = () => {
    const templateParams = {
      to_email: 'salimkuria221@gmail.com',
      subject: 'Receipt for your order',
      customerNumber: customerNumber,
      customerLocation: customerLocation,
      orderDetails: orderDetails,
      totalPrice: totalPrice,
      message_html: generateReceiptHTML(customerNumber, customerLocation, orderDetails),
    };
  
    alertify.alert('Orders', 'Ordered Created Successfully!', function(){ alertify.success('Ok'); });
    navigate('/');
  
    console.log('Data before sending:', templateParams);
  
    // Use the htmlTemplate value in the templateParams object
    const { message_html: htmlTemplate, ...params } = templateParams;
  
    emailjs
      .send('service_fx02hl6', 'template_oiqqsba', params, 'qEyYqEOEw8-vCzxec')
      .then((response) => {
        console.log('Receipt email sent successfully!', response.text);
        emptyCart(); // CLEAR CART AFTER EMAIL HAS BEEN SENT
      })
      .catch((error) => {
        console.error('Error sending receipt email:', error);
      });
  };
  
  
  // ...
  

      // Calculate the total quantity of goods in the cart
      const totalPrice = orderDetails.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='reciept'>
      <ReactModal className='recieptdata' isOpen={isOpen} onRequestClose={onClose}>
        <div className='recieptcontainer'>

            <h2>Mwanaz Bitez</h2>
            <h5>Best Swahili Dishes</h5>
            <p>Kahawa Wendani</p>
            <hr></hr>
            <p>Customer Number: {customerNumber}</p>
            <p>Customer location: {customerLocation}</p>
            <h6 className='BOPDAD'>
             <h6>
             Order: 31
              </h6> 
              <h6>
              11:43am
              </h6>
              </h6>
            <hr></hr>
            <h3>Order SALES:</h3>
        <ul>

          <table >
            <thead>
            <tr className='ordertable'>
            <th>Qy</th>
            <th>Item</th>
            <th>Total</th>    
             </tr>
            </thead>
            <tbody className='paper'>
              {
                orderDetails.map((item) => (
                  <tr key={item.id}>
                   <td>{item.quantity}</td>
                  <td>{item.name}</td>
                  <td>{item.itemTotal}</td>
                  </tr>
                ))
              }
              
            </tbody>
            <h3 className='totalsub'>Subtotal: {totalPrice}</h3>
            
          </table>
          <p>PAID TO: Mwanaz Bitez</p>
          <p>THANK YOU</p>
        </ul>   
        <button className='cartbtn5' onClick={sendReceiptEmail}>Confirm Order</button>     
    </div>
      </ReactModal>
    </div>
  )
}

export default OrderReciept
