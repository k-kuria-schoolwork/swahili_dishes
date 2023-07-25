import React from 'react'
import { useParams } from 'react-router-dom'


function OrderDetails() {

    const params = useParams()
    const foodId = params.foodId   

  return (
    <div>
      this is an order{ foodId }
    </div>
  )
}

export default OrderDetails
