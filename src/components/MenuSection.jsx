import React from 'react';
import shop1 from '../assets/images/shop1.png';
import shop2 from '../assets/images/shop2.png';
import shop3 from '../assets/images/shop3.png';
import shop4 from '../assets/images/shop4.png';
import Button from 'react-bootstrap/Button';
import PopUpBuy from './PopUpBuy';
import { useHome } from '../hooks/useHome';

function MenuSection() {
  const { handleBuy, modalShow, handleChoose, setModalShow, product } = useHome();

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="mt-5 text-center">
            <h2>Our Menu</h2>
          </div>
          {/* container */}
          <div className="container mt-5">
            {/* responsive items */}
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-center">
              {/* 4 items */}

              <div className="col mb-5 d-flex justify-content-center">
                <div className="card position-relative" style={{ width: '18rem' }}>
                  <div className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>Sale</div>
                  <img src={shop1} className="card-img-top" alt="Pizza hawaii" />
                  <div className="card-body">
                    <h5 className="card-title">Pizza hawaii</h5>
                    <span className="text-muted text-decoration-line-through" style={{ color: 'red' }}>$40</span> $12
                    <div className="mt-2">
                      <Button variant="dark" onClick={() => handleBuy('Pizza hawaii', 40)} style={{ minWidth: '100%' }}>
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5 d-flex justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={shop3} className="card-img-top" alt="Pizza margherita" />
                  <div className="card-body">
                    <h5 className="card-title">Pizza margherita</h5>
                    <span>$30</span>
                    <div className="mt-2">
                      <Button variant="dark" onClick={() => handleBuy('Pizza margherita', 30)} style={{ minWidth: '100%' }}>
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5 d-flex justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                  <img src={shop2} className="card-img-top" alt="Pizza pepperoni" />
                  <div className="card-body">
                    <h5 className="card-title">Pizza pepperoni</h5>
                    <span>$25</span>
                    <div className="mt-2">
                      <Button variant="dark" onClick={() => handleBuy('Pizza pepperoni', 25)} style={{ minWidth: '100%' }}>
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col mb-5 d-flex justify-content-center">
                <div className="card position-relative" style={{ width: '18rem' }}>
                  <div className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>Sale</div>
                  <img src={shop4} className="card-img-top" alt="Pizza Pesto" />
                  <div className="card-body">
                    <h5 className="card-title">Pizza Pesto</h5>
                    <span className="text-muted text-decoration-line-through" style={{ color: 'red' }}>$20</span> $10
                    <div className="mt-2">
                      <Button variant="dark" onClick={() => handleBuy('Pizza Pesto', 20)} style={{ minWidth: '100%' }}>
                        Buy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            {/* end responsive items */}
          </div>
          {/* end container */}
        </div>
        {/* end cover */}

        {/* Modal */}
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