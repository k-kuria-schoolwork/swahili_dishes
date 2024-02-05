import React, { useState } from 'react'
import {  useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import data from './data'

function Services() {

    const { addItem } = useCart();
    const [addedItems, setAddedItems] = useState([])
    const [filter, setFilter] = useState('')
    const { totalItems } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('all')

    // Function to check if an item has been added
const isItemAdded = (itemId) => {
  return addedItems.includes(itemId);
};

// Function to add an item to the addedItems list
const addItemToAddedItems = (itemId) => {
  setAddedItems((prevAddedItems) => [...prevAddedItems, itemId]);
};

    const searchText = (e) =>{
        setFilter(e.target.value)
    }

    const handleCategoryClick = (category) =>{
        setSelectedCategory(category)
        setFilter('') //CLEAR THE FILTER WHEN A NEW CATEGORY IS SELECTED
    }

    //Filter items based on category and search
    const filteredItems = data.cardData.filter((item) => {
      const categoryFilter = selectedCategory === 'all' || item.category === selectedCategory;
      const searchFilter = Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(filter.toLowerCase())
      );
      return categoryFilter && searchFilter;
    })
    
  return (
    <div>


    <div className='py-4 container '>
        <div className='row justify-container-centre'>
            <div className='blackhead'>
            <div className='servehead'>
                <p>welcome </p>  
                <h2>What can we serve you</h2>
                </div>

                <div className='searchbar'>

                  <div className='col-4 mb-5' id='search1' >
                      <div className='mb-3 col-17 mx-auto text-centre' >
                          <input
                          id='searchfood'
                          type='text'
                          placeholder="What are you buying..." 
                          className='form-control'
                          value={filter}
                          onChange={searchText.bind(this)}
                          />
                      </div>
                  </div>

                  <div className='carticon'>
                        <Link to='addcart'> 
                          <i class="fa-solid fa-cart-shopping">
                            <h6>{totalItems}</h6> 
                              </i>
                        </Link> 
                      <p>View Cart</p>  
                  </div>
                  </div>
            </div>
            
         

            <div className='category'>
                <div className='catwrapper'>
                <button className={`cartbtn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => handleCategoryClick('all')} >
                All
                </button>
                <button className={`cartbtn ${selectedCategory === 'fast-food' ? 'active' : ''}`} onClick={() => handleCategoryClick('fast-food')}>
                fast-food
                </button>
                <button className={`cartbtn ${selectedCategory === 'Snack' ? 'active' : ''}`} onClick={() => handleCategoryClick('Snack')}>
                Snack
                </button>
                <button className={`cartbtn ${selectedCategory === 'Drinks' ? 'active' : ''}`} onClick={() => handleCategoryClick('Drinks')}>
                Drinks
                </button>
      
           </div>

           <div className='servecontainer'>
        {filteredItems.map((item) => (
          <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.id} id='servecard'>
            <div className='col'>
              <div className='card p-0 overflow-hidden shadow'>
                <img src={item.img} className='card-img-top' alt='...' style={{ height: '200px' }} />
                <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <div key={item.id} className='addcart'>
                    <p className='card-text'>Ksh.{item.price}</p>
                    <button
                onClick={() => {
                  if (!isItemAdded(item.id)) {serve
                    addItem(item);
                    addItemToAddedItems(item.id);
                  }
                }}
                className={`cssbuttons-io-button ${isItemAdded(item.id) ? 'ordered' : ''}`}
                disabled={isItemAdded(item.id)}
              >
                   
                <span>{isItemAdded(item.id) ? 'Ordered' : 'Add'}</span>
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


 {/* CATEGORY FILTERING*/}

           {/* <div className='servecontainer'>
    {data.cardData
      .filter((item) => {
        if (selectedCategory === 'all') {
          return true; // Display all items
        } else {
          return item.category === selectedCategory; // Filter by selected category
        }
      })
      .map((item) => (
        <div class="col-11 col-md-6 col-lg-3 mx-0 mb-4 " key={item.id}>
            <div className='col'>
                <div className='card p-0 overflow-hidden shadow'>
                <img src={item.img} class="card-img-top " alt="..." style={{ height: '200px' }}/>
                <div className='card-body'>
                <h5 class="card-title">{item.name}</h5>
                <div key={item.id} className='addcart'>
                <p class="card-text">Ksh.{item.price}</p>
                <button id='addbtn' onClick={() => addItem(item)} class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
</button>
                </div>
                </div>
                </div>
            </div>
          
        </div>
      ))}
  </div> */}
            </div>
        

                        {/*MAPPING THE DATA ITEMS IN A CARD CONTAINER */}
        {/* <div className='servecontainer'>
        {dataSearch.map((item, index) =>{
        return(
            <div class="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
            <div class="col ">
            <div class="card p-0 overflow-hidden shadow ">
              <img src={item.img} class="card-img-top " alt="..." style={{ height: '200px' }}/>
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <div key={item.id} className='addcart'>
                <p class="card-text">Ksh.{item.price}</p>
                <button id='addbtn' onClick={() => addItem(item)} class="cssbuttons-io-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    })}

</div>   */}

        </div>
        </div>
        </div>

    
  )
}

export default Services

