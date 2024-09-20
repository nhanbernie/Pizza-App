import React, { Component } from 'react'
// import shop1 from '../assets/shop1.png'
import shop1 from '../assets/images/shop1.png'
import shop2 from '../assets/images/shop2.png'
import shop3 from '../assets/images/shop3.png'
import shop4 from '../assets/images/shop4.png'
import pizza5 from '../assets/images/pizza5.jpg'
export class MenuSection extends Component {

    constructor(){
        super()
        this.state = ({
            numberItems: 0
        })
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = () =>{
        alert('Do you want to buy this pizza?')
        this.setState(prevState => ({
            numberItems: prevState.numberItems + 1          
        }))
        // console.log(this.state.numberItems); // Sử dụng this.state.numberItems
    }

    render() {
        console.log(this.state.numberItems)
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
                                {/* 4 item  */}
                                <div className="col mb-5 d-flex justify-content-center">
                                    <div className="card position-relative" style={{ width: '18rem' }}>
                                        <div className="badge bg-danger position-absolute" style={{ top: '10px', right: '10px' }}>Sale</div>
                                        <img src={shop1} className="card-img-top" alt="Pizza hawaii" />
                                        <div className="card-body">
                                            <h5 className="card-title">Pizza hawaii</h5>
                                            <span className="text-muted text-decoration-line-through" style={{ color: 'red' }}>$40</span> $12
                                            <div className="mt-2">
                                                <a className="btn btn-dark" style={{ minWidth: '100%' }} onClick={this.handleAdd}>Buy</a>
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
                                                <a  className="btn btn-dark" style={{ minWidth: '100%' }} onClick={this.handleAdd}>Buy</a>
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
                                                <a className="btn btn-dark" style={{ minWidth: '100%' }} onClick={this.handleAdd}>Buy</a>
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
                                                <a  className="btn btn-dark" style={{ minWidth: '100%' }} onClick={this.handleAdd}>Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                            </div>
                            {/* end resposive items */}
                        </div>
                        {/* end container */}
                    </div>
                    {/* end cover */}
                </section>
            </>
        )
    }
}

export default MenuSection;