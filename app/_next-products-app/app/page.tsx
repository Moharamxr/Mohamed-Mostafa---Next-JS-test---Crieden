import React from 'react';
import ProductList from './components/Products/ProductList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1 className="text-2xl font-bold">Product List</h1>
      <ProductList products={products} />
    </main>
  );
};

export default HomePage;