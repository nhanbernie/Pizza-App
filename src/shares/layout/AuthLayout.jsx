import React from 'react'
import Navigation from '../../modules/StoresPage/components/Navigation'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuSection from '../../modules/StoresPage/components/MenuSection'
import BookingForm from '../../modules/StoresPage/components/BookingForm'
import Footer from '../../modules/StoresPage/components/Footer'
import Carosel from '../../modules/StoresPage/components/Carosel'
function AuthLayout() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-color">
                <Navigation />
            </nav>
            <div id="carouselExampleCaptions" className="carousel slide">
                <Carosel />
            </div>
            <Container fluid />
                <MenuSection />
            <Container />

            <Container>
                <BookingForm />
            </Container>

            <Container fluid className='my-5 footer-pizza'>
                <Footer />
            </Container>
        </div>
    )
}

export default AuthLayout