import React from 'react'

function Home() {
  return (
    <div >

<svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(244,192,53)" fill-opacity="1" d="M0,288L60,277.3C120,267,240,
245,360,213.3C480,181,600,139,720,112C840,85,960,75,1080,106.7C1200,139,1320,213,
1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,
0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
  </path>
  </svg>

  
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
      <button className='BTN1'> Get Started</button>
    </div>
    
  )
}

export default Home
