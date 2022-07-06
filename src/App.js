import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Content from './Content';
import Testimonial from './Testimonial';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Content/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
