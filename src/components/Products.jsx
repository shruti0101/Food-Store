import React from 'react'
import './Products.css'


const productsData = [
    {
      id: 1,
      image: "https://geevosis.xyz/saksham-food/assest/images/product/1.jpg",
      name: "Paneer",
      quantity: "1 Kg",
      price: "₹260",
    },
    {
      id: 2,
      image: "https://geevosis.xyz/saksham-food/assest/images/product/2.jpg",
  
      name: "Bread",
      quantity: "1 Kg",
      price: "₹100",
    },
    {
      id: 3,
      image: "https://geevosis.xyz/saksham-food/assest/images/product/3.jpg",
   
      name: "Sweet Corn",
      quantity: "1 Kg",
      price: "₹160",
    },

    {
        id: 4,
        image: "https://geevosis.xyz/saksham-food/assest/images/product/4.jpg",
      
        name: "Frozen Vegetable",
        quantity: "1 Kg",
        price: "₹140",
      },

      {
        id: 5,
        image: "https://geevosis.xyz/saksham-food/assest/images/product/1.jpg",
      
        name: "Paneer",
        quantity: "1 Kg",
        price: "₹240",
      },

      {
        id: 6,
        image: "https://geevosis.xyz/saksham-food/assest/images/product/2.jpg",
      
        name: "Bread",
        quantity: "1 Kg",
        price: "₹104",
      },

      {
        id: 3,
        image: "https://geevosis.xyz/saksham-food/assest/images/product/3.jpg",
     
        name: "Sweet Corn",
        quantity: "1 Kg",
        price: "₹160",
      },

      {
        id: 4,
        image: "https://geevosis.xyz/saksham-food/assest/images/product/4.jpg",
      
        name: "Frozen Vegetable",
        quantity: "1 Kg",
        price: "₹140",
      },


  ];

const Products = () => {



  return (
    <div>
   

<section className='"product_wrapper bg-black py-5'>
<div className="container">
    <div className="row justify-content-center g-3 g-lg-5 mx-0">
        <h3 className="mb-0 pb-0">
            All Products
        </h3>
        <span className="text-white pb-3 pb-lg-5 d-inline-block">
            Daily Freshest Products and much more!
        </span>
        {productsData.map(product => (
            <div className="col-lg-3  col-6" key={product.id}>
            <div className="card_product">
             <a href="">
                   <img src={product.image} className="category_img w-100 rounded-4" alt="product-img"/>
             </a>
                <div className="card-body pt-2 ps-2">
                    <p className="mb-1">
                        {product.name} <span className="ps-lg-3 ms-lg-2 border-start d-block d-lg-inline-block">
                            {product.quantity}
                        </span>
                    </p>
                    <a href="" className="btn_price">{product.price}</a>
                </div>
            </div>
        </div>
        ))}
    </div>
    <div className="text-center mt-4">
        <a href="" className="btn_viewmore btn btn-outline-light px-3 view-more ">View More</a> 
        </div>
</div>          
</section>


    </div>
  )
}

export default Products