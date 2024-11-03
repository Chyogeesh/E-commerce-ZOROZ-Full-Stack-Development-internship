// src/pages/ProductListingPage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

function ProductListingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
