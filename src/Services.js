import React, { useState } from 'react'
import data from './data'

function Services() {
    const [filter, setFilter] = useState('')

    const searchText = (e) =>{
        setFilter(e.target.value)
    }
   let dataSearch = data.cardData.filter(item =>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
   })



  return (
    <div className='py-4 container '>
        <div className='row justify-container-centre'>
            <div className='searchbar'>
                <div>
                <h2>welcome </h2>  
             <p>What can we serve you</p>
                </div>

                <div className='col-10 mb-5'>
                    <div className='mb-3 col-5 mx-auto text-centre'>
                        <label className='form-label'>Search</label>
                        <input
                        type='text'
                        className='form-control'
                        value={filter}
                        onChange={searchText.bind(this)}
                        />
                       
                    </div>
                </div>
     
            </div>
        


        <div className='servecontainer'>
        {dataSearch.map((item, index) =>{
        return(
            <div class="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
            <div class="col ">
            <div class="card p-0 overflow-hidden h-100 shadow ">
              <img src={item.img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <h6 class="card-title">{item.category}</h6>
                <p class="card-text">{item.price}</p>
              </div>
            </div>
          </div>
          </div>
        )
    })}

</div> 
        </div>
        </div>
    
  )
}

export default Services
