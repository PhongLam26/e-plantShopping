import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-kicker"><span className="hero-kicker-line" />Grow a little happiness</p>
            <h1>Bring the<br /><em>outside</em> in.</h1>
            <p className="hero-welcome">Welcome to Paradise Nursery, where thoughtful greenery makes every room feel more like home.</p>
            <button className="button button-light" type="button" onClick={() => navigate('/plants')}>Get Started <span aria-hidden="true">→</span></button>
            <div className="hero-footnote"><span aria-hidden="true">✳</span> A happier home starts with a little green.</div>
          </div>
          <div className="hero-side-note" aria-hidden="true">A place to grow</div>
        </section>
        <div className="home-content">
          <section className="welcome-strip" aria-label="Welcome">
            <span className="welcome-leaf" aria-hidden="true">✳</span>
            <p>Find the plant that feels like <em>you.</em></p>
            <span className="welcome-caption">Simple joys, rooted at home</span>
          </section>
          <AboutUs />
        </div>
      </main>
      <footer className="site-footer"><span>Paradise Nursery</span><span>Grown with care. Made for home.</span></footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
