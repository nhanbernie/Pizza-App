import '../styles/Navigation.css'
import { useHome } from '../../../hooks/useHome';
import PopupSotres from "./PopupSotres";
import LoginPopUp from '../../Login/components/LoginPopUp';
import { useState } from 'react';

function Navigation() {
    const { count, modalShowStores, handleOpenShopping, setModalShowStores } = useHome();
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <div className="my-container container-fluid text-nav">
                {/* nút menu nằm bên trái */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* logo */}
                <a className="navbar-brand" href="#" style={{ fontSize: 'xx-large' }}>Pizza House</a>

                {/* search */}
                <form className="d-flex align-items-center justify-content-center w-100 mx-lg-3 my-2 my-lg-0" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search"
                        style={{ width: '500px', minWidth: '150px' }} />
                    <a href="" className="btn btn-danger me-3">
                        <i className="fa fa-search" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <div className="btn position-relative" onClick={handleOpenShopping}>
                        <i
                            className="fa-solid fa-store icon-shopping"
                            style={{ fontSize: '2rem', color: 'white' }}
                        >
                        </i>
                        {count > 0 && (
                            <span
                                className="position-absolute   badge rounded-pill bg-danger number"
                                style={{ fontSize: '0.7rem' }}
                            >
                                {count}
                            </span>
                        )}
                    </div>

                </form>

                {/* infor */}
                <div className="collapse navbar-collapse menu-header" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item dropdown text-black">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About us</a>
                            <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: 'black' }}>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className='user-icon'  onClick={() => setModalShow(true)}>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
            <PopupSotres show={modalShowStores} onHide={() => setModalShowStores(false)} />
            <LoginPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )

}

export default Navigation