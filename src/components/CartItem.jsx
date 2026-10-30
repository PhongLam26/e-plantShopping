import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';
import { CartPageNavbar } from './ProductList';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const totalPlants = items.reduce((total, item) => total + item.quantity, 0);
  const totalCost = items.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <>
      <CartPageNavbar />
      <main className="cart-page cart-container">
        <div className="cart-page-heading">
          <div>
            <p className="eyebrow">Your little green corner</p>
            <h1>Shopping Cart</h1>
            <p className="cart-subtitle">{totalPlants} {totalPlants === 1 ? 'plant' : 'plants'} ready to make themselves at home.</p>
          </div>
        </div>
        {items.length === 0 ? (
          <section className="empty-cart" aria-labelledby="empty-cart-title">
            <span className="empty-cart-icon" aria-hidden="true">✿</span>
            <h2 id="empty-cart-title">Your cart is ready to bloom.</h2>
            <p>Take a look around and find a plant that feels right for your space.</p>
            <button className="button button-primary get-started-button" type="button" onClick={(e) => onContinueShopping(e)}>
              Continue Shopping <span aria-hidden="true">→</span>
            </button>
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
                    <p className="cart-unit-price">{currency.format(item.cost)} <span>each</span></p>
                    <button className="delete-button" type="button" onClick={() => handleRemove(item)}>
                      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 6h12M8 6V4h4v2m2 0-.7 10H6.7L6 6m2 3v4m4-4v4" /></svg>
                      Delete
                    </button>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                      <button className="decrement-button" type="button" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => handleDecrement(item)}>−</button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button className="increment-button" type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => handleIncrement(item)}>+</button>
                    </div>
                    <strong className="line-total">{currency.format(item.cost * item.quantity)}</strong>
                  </div>
                </article>
              ))}
              <button className="text-link mobile-continue get-started-button" type="button" onClick={(e) => onContinueShopping(e)}>
                ← Continue shopping
              </button>
            </section>
            <aside className="cart-summary" aria-labelledby="summary-title">
              <p className="eyebrow">A good choice</p>
              <h2 id="summary-title">Order Summary</h2>
              <div className="summary-row"><span>Plants</span><span>{totalPlants}</span></div>
              <div className="summary-row"><span>Subtotal</span><span>{currency.format(totalCost)}</span></div>
              <div className="summary-total"><span>Total</span><strong>{currency.format(totalCost)}</strong></div>
              <p className="summary-note">Shipping and any local taxes are calculated at checkout.</p>
              <button className="button button-primary checkout-button" type="button" onClick={() => setCheckoutMessage('Coming Soon')}>
                Checkout <span aria-hidden="true">→</span>
              </button>
              <p className="checkout-message" role="status">{checkoutMessage}</p>
              <button className="text-link desktop-continue get-started-button" type="button" onClick={(e) => onContinueShopping(e)}>
                Continue Shopping <span aria-hidden="true">→</span>
              </button>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}
