// Products.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    // Fetch products from your Flask API
    fetch('http://localhost:5000/products') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    (categoryFilter === 'all' || product.category === categoryFilter) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="product-list">
        <div className="filter-bar">
          <div className='search-bar'>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>
          <div className="category-filters">
            <select
              value={categoryFilter}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="men">Female</option>
              <option value="women">Male</option>
            </select>
          </div>
        </div>
        <div className='all'>
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
                <img src={product.imageSrc} alt={product.imageAlt} />
                <h2>{product.name}</h2>
                <p>{`Price: ₹${product.price}`}</p>
                <p>{`Color: ${product.color}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
