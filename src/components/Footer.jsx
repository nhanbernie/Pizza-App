import React from 'react';

function Footer () {
    return (
        <>
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#181717" }}>
                <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#3333336b" }}>
                    <div className="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/NBernieTo" target="_blank" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold footer-color">Pizza Nhan's House</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>Best choice - Best price</p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold footer-color">Media</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <a href="https://www.facebook.com/NBernieTo" target='_blank' className="text-white">Facebook</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white">Tiktok</a>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold footer-color">Contact</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i className="fas fa-home mr-3"></i> Nguyen Thi Minh Khai</p>
                                <p><i className="fas fa-envelope mr-3"></i> nhanttqe180206@fpt.edu.vn</p>
                                <p><i className="fas fa-phone mr-3"></i> + 037 561 ****</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2024 Copyright: Nhan
                </div>
            </footer>
        </>
    );
};

export default Footer;