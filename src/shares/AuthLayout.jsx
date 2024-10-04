import React from 'react'
import Navigation from '../components/Navigation'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import MenuSection from '../components/MenuSection'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import Carosel from '../components/Carosel'
function AuthLayout() {
    return (
        <>
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
        </>
    )
}

export default AuthLayout