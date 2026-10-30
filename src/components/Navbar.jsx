import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LeafMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" role="presentation">
        <path d="M31.9 7.7c-12 .3-20.2 4.7-20.2 14 0 5.8 4 9.8 9.5 9.8 8.3 0 11.2-10.4 10.7-23.8ZM11.8 32c3.5-6.5 8.2-11.7 14.5-16.7" />
      </svg>
    </span>
  );
}

export default function Navbar() {
  const totalItems = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  return (
    <header className="site-header">
      <div className="nav-inner">
        <NavLink className="brand" to="/" aria-label="Paradise Nursery home">
          <LeafMark />
          <span className="brand-name">Paradise<span>Nursery</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/plants">Plants</NavLink>
          <NavLink className={({ isActive }) => `nav-link cart-nav-link${isActive ? ' active' : ''}`} to="/cart" aria-label={`Cart, ${totalItems} items`}>
            <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1.2" /><circle cx="18" cy="20" r="1.2" /></svg>
            <span>Cart</span><span className="cart-count" aria-live="polite">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
