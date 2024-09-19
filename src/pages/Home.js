import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { items: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <h1>Products</h1>
      <div className="row">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
