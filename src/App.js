import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Carousel from './components/Carosel';
import '../src/App.css'
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
        <Navigation/>
        <Carousel/>
        <MenuSection/>
        <BookingForm/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
