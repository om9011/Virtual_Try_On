import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Details.css"
import Try from "../../Page/Try_Om/Main_Pro/Try";
import Popup from "../../Page/Try_Om/Popup/Popup";


const details = {
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
}

const reviews = { href: '#', average: 4, totalCount: 117 };

export default function Details() {
  const id = useParams();
  const productid = id.productId
  const [productDetails, setidDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/product/${productid}`)
        .then((response) => {
          setidDetails(response.data);
        })
        .catch((error) => {
          console.error('Error fetching id details:', error);
        });
    }
  }, [productid]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }


  const togglepopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='main'>
      <div className='half1'>
        <div className='image-section'>
          <div className='main_div'>
            <img src={productDetails.imageSrc} id='main_img' alt='' />
          </div>
        </div>
      </div>
      <div className='half2'>
        <div className="info">
          <h1 className="max font-bold tracking-tight text-gray-900 sm:text-3xl">{productDetails.name}</h1>
        </div>

        <div className="info">
          <h2 className="sr-only">Product information</h2>
          <p className="text-4xl text-gray-900">₹{productDetails.price}</p>
        </div>
        <div className='desc info'>
          <p>
            {details.description}
          </p>
        </div>
        <div className='info highlight'>
          <h3 className='text-xl font-semibold'>Highlights:</h3>
          <ul>
              {details.highlights.map((highlight, index) => (
                <li key={index} >{highlight}</li>
              ))}
            </ul>
        </div>
        <hr className="info horizontal-line" />
        <div className="sizes info">
          <h3 className="text-xl font-semibold">Sizes:</h3>
          <div className="size-buttons">
            {details.sizes.map((size, index) => (
              <button
                key={index}
                className="size-button"
                disabled={!size.inStock}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
        <hr className="info horizontal-line" />

        <div className='buy_section'>
          <div>
            <button className='buy'>Add To Cart</button>
            <button className='buy'>Buy Now</button>
          </div>
          <div>
            <button className='moto' onClick={togglepopup}>Try it On</button>
            {isOpen && <Popup
              handleClose={togglepopup}
              content={
                <Try />
              }
            />}
          </div>

        </div>
        <hr className='info horizontal-line' />
        <div className='reviews info'>
          <h3 className='text-xl font-semibold'>Reviews:</h3>
          <p>Average Rating: {reviews.average}</p>
          <p>Total Reviews: {reviews.totalCount}</p>
        </div>
      </div>
    </div>
  );
}
