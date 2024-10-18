import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import PopUpBuy from './PopUpBuy';
import { useDispatch, useSelector } from 'react-redux';
import { useHome } from '../../../hooks/useHome'; 
import { fetchProductsRequest } from '../../../store/actions/productActions'; 

function MenuSection() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product); 
  const { handleBuy, modalShow, handleChoose, setModalShow, product } = useHome();

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="mt-5 text-center">
            <h2>Our Menu</h2>
          </div>
          <div className="container mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
              {/* Hiển thị danh sách sản phẩm */}
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="col mb-5 d-flex justify-content-center">
                    <div className="card position-relative" style={{ width: '18rem' }}>
                      {product.salePrice && (
                        <div className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>
                          Sale
                        </div>
                      )}
                      <img src={product.image} className="card-img-top" alt={product.title} />
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        {product.salePrice ? (
                          <>
                            <span className="text-muted text-decoration-line-through">${product.price}</span> ${product.salePrice}
                          </>
                        ) : (
                          <span>${product.price}</span>
                        )}
                        <div className="mt-2">
                          <Button variant="dark" onClick={() => handleBuy(product.title, product.salePrice || product.price)} style={{ minWidth: '100%' }}>
                            Buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Modal hiển thị khi người dùng nhấn nút mua */}
        <PopUpBuy
          show={modalShow.show}
          onChoose={handleChoose}
          onHide={() => setModalShow({ show: false, product: null })}
          product={product}
        />
      </section>
    </>
  );
}

export default MenuSection;
