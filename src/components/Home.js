import React from 'react'

function Home() {
  return (
    <div >
        <div className='homepage'>
      <h2>Express yourself through Swahili dishes</h2>
      <div className='carousel'>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img  src='../images/foodhome1.png' alt='contimage'></img>
    </div>
    <div class="carousel-item">
    <img  src='../images/foodhome2.png' alt='contimage'></img>
    </div>
    <div class="carousel-item">
    <img  src='../images/foodhome3.png' alt='contimage'></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
    
  )
}

export default Home
