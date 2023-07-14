import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >

        <div className='homepage'>
          <h1 className='homehead'> Mwanaz Bites</h1>
          <div className='home1'>
            <div className='home1a'>
            <h5>Express yourself through the best Swahili dishes</h5>
            <p>All the dishes you love are just a click away.Order from our full menu, and enjoy the comfort of online reservation</p>
            </div> 
           <div>
           <img className='imga' src='https://ling-app.com/wp-content/uploads/2022/03/Swahili-Foods.jpg' alt='foodimage'></img>
            </div> 
          </div>

          <div className='home2'>
            <div>
            <img className='home2a' src='https://lh3.googleusercontent.com/p/AF1QipMSOrJ8Lla9KY9tGVH9rrDJxyi2wf9Y6a7KGfAH=w1080-h608-p-no-v0' alt='foodimage'></img>
            </div>
            <div className='home2text'>
            <h4>Treat yourself to our daily specials</h4>
            <p>Spend more time enjoying yourself and less time stressing about the details with catering from us.</p>
            </div>
          </div>
      </div>
      <div className='home3'>
        <div className='home3a'>
        <h3>Get Started with our App</h3>
       <p>All the dishes you love are just a few clicks away.Order from our menu  and enjoy the comfort</p>
      <button className='BTN1'>
        <Link className='linkbtn1' to='Services'> Get Started</Link>
      </button>
      
   
        </div>
         <div>
           <img className='img4' src='https://www.foodandthefabulous.com/wp-content/uploads/2019/09/MomsFood1-500x383.jpg' alt='foodimage'></img>
        </div> 
      </div>
     
    </div>
    
  )
}

export default Home
