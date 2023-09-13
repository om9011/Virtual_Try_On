import { useState } from 'react'
import "./Details.css"
import Popup from '../../Page/Try_Om/Popup/Popup';
import Try from '../../Page/Try_Om/Main_Pro/Try';


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
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
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

export default function Details() {
  const [isOpen, setIsOpen] = useState(false);
  const [mainImage, setMainImage] = useState(product.images[0].src);
  const [currentSubImage, setCurrentSubImage] = useState(product.images[0].src);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
    setCurrentSubImage(imageSrc);
  };

  const togglepopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='main'>
      <div className='half1'>
        <div className='image-section'>
          <div className='main_div'>
            <img src={mainImage} id='main_img' alt=''/>
          </div>
          <div className='mini_img'>
            {product.images.map((subImage, index) => (
              <img
                key={index}
                src={subImage.src}
                id='sub_img'
                onClick={() => handleImageClick(subImage.src)}
                className={subImage.src === currentSubImage ? 'active' : ''}
                alt={subImage.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='half2'>
        <div className="info">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
        </div>

        <div className="info">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
        </div>
        <div className='desc info'>
          <p>
            {product.description}
          </p>
        </div>
        <div className='info highlight'>
          <h3 className='text-xl font-semibold'>Highlights:</h3>
          <ul>
            {product.highlights.map((highlight, index) => (
              <li key={index} >{highlight}</li>
            ))}
          </ul>
        </div>
        <hr className="info horizontal-line" />
        <div className="sizes info">
          <h3 className="text-xl font-semibold">Sizes:</h3>
          <div className="size-buttons">
            {product.sizes.map((size, index) => (
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
  )
}
