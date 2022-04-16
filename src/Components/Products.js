import React from 'react'
import "./Styles/Products.css"
import Dashboard from "../Assets/Dashboard.png"
import Acuplan from "../Assets/acuplan.png"
import symptoms from "../Assets/symptoms.png"

function Products() {
  return (
    <div className='product-container'>
        <h1 className='product-heading'>Products</h1>
        <div className='product-hero'>
            <div>
                <img src={Dashboard} className="phones"/>
            </div>
            <div>
                <img src={Acuplan} className="phones"/>
            </div>
            <div>
                <img src={symptoms} className="phones"/>
            </div>
        </div>
    </div>
  )
}

export default Products