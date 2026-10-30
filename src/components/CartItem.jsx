import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import Navbar from './Navbar';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const totalPlants = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const changeQuantity = (item, amount) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + amount }));

  return (
    <>
      <Navbar />
      <main className="cart-page">
        <div className="cart-page-heading">
          <div>
            <p className="eyebrow">Your little green corner</p>
            <h1>Shopping Cart</h1>
            <p className="cart-subtitle">{totalPlants} {totalPlants === 1 ? 'plant' : 'plants'} ready to make themselves at home.</p>
          </div>
          {items.length > 0 && <Link className="text-link desktop-continue" to="/plants">Continue shopping <span aria-hidden="true">→</span></Link>}
        </div>
        {items.length === 0 ? (
          <section className="empty-cart" aria-labelledby="empty-cart-title">
            <span className="empty-cart-icon" aria-hidden="true">✿</span>
            <h2 id="empty-cart-title">Your cart is ready to bloom.</h2>
            <p>Take a look around and find a plant that feels right for your space.</p>
            <Link className="button button-primary" to="/plants">Continue Shopping <span aria-hidden="true">→</span></Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Items in your cart">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img className="cart-item-image" src={item.image} alt={`${item.name} plant`} />
                  <div className="cart-item-info">
                    <span className="cart-item-category">{item.category}</span>
                    <h2>{item.name}</h2>
                    <p className="cart-unit-price">{currency.format(item.price)} <span>each</span></p>
                    <button className="delete-button" type="button" onClick={() => dispatch(removeItem(item.id))}>
                      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2m2 0-.7 10H6.7L6 6m2 3v4m4-4v4" /></svg>
                      Delete
                    </button>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => changeQuantity(item, -1)}>−</button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => changeQuantity(item, 1)}>+</button>
                    </div>
                    <strong className="line-total">{currency.format(item.price * item.quantity)}</strong>
                  </div>
                </article>
              ))}
              <Link className="text-link mobile-continue" to="/plants">← Continue shopping</Link>
            </section>
            <aside className="cart-summary" aria-labelledby="summary-title">
              <p className="eyebrow">A good choice</p>
              <h2 id="summary-title">Order Summary</h2>
              <div className="summary-row"><span>Plants</span><span>{totalPlants}</span></div>
              <div className="summary-row"><span>Subtotal</span><span>{currency.format(subtotal)}</span></div>
              <div className="summary-total"><span>Total</span><strong>{currency.format(subtotal)}</strong></div>
              <p className="summary-note">Shipping and any local taxes are calculated at checkout.</p>
              <button className="button button-primary checkout-button" type="button" onClick={() => setCheckoutMessage('Coming Soon')}>Checkout <span aria-hidden="true">→</span></button>
              <p className="checkout-message" role="status">{checkoutMessage}</p>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
