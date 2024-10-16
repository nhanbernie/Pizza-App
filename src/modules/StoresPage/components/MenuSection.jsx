import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import PopUpBuy from './PopUpBuy';
import { fetchProductsRequest } from '../../../store/actions/productActions';

function MenuSection() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setModalShow(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Kiểm tra nếu products là một mảng trước khi map
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="mt-5 text-center">
            <h2>Our Menu</h2>
          </div>
          <div className="container mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
              {/* Chỉ map nếu products là mảng */}
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
                          <Button variant="dark" onClick={() => handleBuy(product)} style={{ minWidth: '100%' }}>
                            Buy
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available.</p> // Thêm fallback nếu không có sản phẩm nào
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        <PopUpBuy
          show={modalShow}
          onChoose={() => setModalShow(false)}
          onHide={() => setModalShow(false)}
          product={selectedProduct}
        />
      </section>
    </>
  );
}

export default MenuSection;
