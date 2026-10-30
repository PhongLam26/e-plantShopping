import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';

export const plantsArray = [
  {
    category: 'Indoor Plants',
    description: 'Leafy favorites to make every room feel more alive.',
    plants: [
      { id: 'monstera-deliciosa', name: 'Monstera Deliciosa', description: 'A tropical favorite with beautifully split leaves.', cost: 32, price: 32, image: '/images/plant-06.jpg' },
      { id: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', description: 'Sculptural, broad leaves bring sunshine to bright rooms.', cost: 38, price: 38, image: '/images/plant-10.jpg' },
      { id: 'snake-plant', name: 'Snake Plant', description: 'An easygoing upright plant for a sunny corner.', cost: 24, price: 24, image: '/images/plant-04.jpg' },
      { id: 'golden-pothos', name: 'Golden Pothos', description: 'Trailing heart-shaped leaves soften shelves and tables.', cost: 18, price: 18, image: '/images/plant-09.jpg' },
      { id: 'peace-lily', name: 'Peace Lily', description: 'Deep-green foliage and graceful white blooms.', cost: 26, price: 26, image: '/images/plant-08.jpg' },
      { id: 'rubber-plant', name: 'Rubber Plant', description: 'Glossy leaves make this a striking indoor tree.', cost: 30, price: 30, image: '/images/plant-01.jpg' },
    ],
  },
  {
    category: 'Succulents & Cacti',
    description: 'Small-space beauties with a sunny, sculptural side.',
    plants: [
      { id: 'echeveria-elegans', name: 'Echeveria Elegans', description: 'A compact rosette succulent with silvery-green leaves.', cost: 14, price: 14, image: '/images/plant-02.jpg' },
      { id: 'aloe-vera', name: 'Aloe Vera', description: 'A sun-loving succulent with sculptural, spiky leaves.', cost: 16, price: 16, image: '/images/plant-04.jpg' },
      { id: 'jade-plant', name: 'Jade Plant', description: 'A cheerful, slow-growing succulent with plump leaves.', cost: 18, price: 18, image: '/images/plant-11.jpg' },
      { id: 'zebra-haworthia', name: 'Zebra Haworthia', description: 'A petite rosette with distinctive white-striped leaves.', cost: 13, price: 13, image: '/images/plant-02.jpg' },
      { id: 'string-of-pearls', name: 'String of Pearls', description: 'Bead-like trailing foliage makes a playful accent.', cost: 21, price: 21, image: '/images/plant-09.jpg' },
      { id: 'bunny-ear-cactus', name: 'Bunny Ear Cactus', description: 'A charming, low-maintenance cactus with rounded pads.', cost: 17, price: 17, image: '/images/plant-17.jpg' },
    ],
  },
  {
    category: 'Air-Purifying Plants',
    description: 'Fresh greenery chosen for a calmer home atmosphere.',
    plants: [
      { id: 'areca-palm', name: 'Areca Palm', description: 'Feathery arching fronds bring a relaxed tropical feel.', cost: 36, price: 36, image: '/images/plant-08.jpg' },
      { id: 'spider-plant', name: 'Spider Plant', description: 'Bright striped leaves and baby plantlets make it a favorite.', cost: 20, price: 20, image: '/images/plant-06.jpg' },
      { id: 'boston-fern', name: 'Boston Fern', description: 'Lush, ruffled fronds create a fresh and full display.', cost: 23, price: 23, image: '/images/plant-03.jpg' },
      { id: 'english-ivy', name: 'English Ivy', description: 'Classic trailing greenery for a hanging pot.', cost: 17, price: 17, image: '/images/plant-09.jpg' },
      { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', description: 'Round leaves with delicate silver stripes.', cost: 29, price: 29, image: '/images/plant-15.jpg' },
      { id: 'chinese-evergreen', name: 'Chinese Evergreen', description: 'Colorful patterned foliage brings an easy pop of green.', cost: 25, price: 25, image: '/images/plant-16.jpg' },
    ],
  },
];

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export function Navbar({ onHomeClick }) {
  const navigate = useNavigate();
  const totalItems = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick?.();
    navigate('/');
  };
  const handlePlantsClick = (event) => {
    event.preventDefault();
    navigate('/plants');
  };
  const handleCartClick = (event) => {
    event.preventDefault();
    navigate('/cart');
  };

  return (
    <header className="site-header navbar">
      <div className="nav-inner">
        <NavLink className="brand" to="/" aria-label="Paradise Nursery home">
          <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" role="presentation"><path d="M31.9 7.7c-12 .3-20.2 4.7-20.2 14 0 5.8 4 9.8 9.5 9.8 8.3 0 11.2-10.4 10.7-23.8ZM11.8 32c3.5-6.5 8.2-11.7 14.5-16.7" /></svg></span>
          <span className="brand-name">Paradise<span>Nursery</span></span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/" onClick={handleHomeClick}>Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/plants" onClick={handlePlantsClick}>Plants</NavLink>
          <NavLink className={({ isActive }) => `nav-link cart-nav-link${isActive ? ' active' : ''}`} to="/cart" onClick={handleCartClick} aria-label={`Cart, ${totalItems} items`}>
            <svg className="cart-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 1.9-1.4L21 8H6" /><circle cx="10" cy="20" r="1.2" /><circle cx="18" cy="20" r="1.2" /></svg>
            <span>Cart</span><span className="cart_quantity_count cart-count" aria-live="polite">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

// CartItem.jsx uses this shared header so the cart and product listing keep the same navigation.
export function CartPageNavbar() {
  return <Navbar />;
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedToCart = cartItems.reduce((added, item) => {
    added[item.name] = true;
    return added;
  }, {});

  return (
    <>
      <Navbar />
      <main className="catalog-page">
        <section className="catalog-intro">
          <p className="eyebrow">Find your new favorite</p>
          <h1>Plants for every kind of home.</h1>
          <p>Thoughtful greenery, picked to help your space feel a little more like you.</p>
          <div className="catalog-highlights" aria-label="Shop highlights">
            <span><span className="highlight-dot" />Healthy plants, chosen with care</span>
            <span><span className="highlight-dot" />Something lovely for every room</span>
          </div>
        </section>
        <div className="product-list">
          {plantsArray.map((category, categoryIndex) => (
            <section className="plant-category" key={category.category} aria-labelledby={`plant-category-${categoryIndex + 1}`}>
              <div className="category-heading">
                <div>
                  <p className="eyebrow">Collection {String(categoryIndex + 1).padStart(2, '0')}</p>
                  <h2 id={`plant-category-${categoryIndex + 1}`}>{category.category}</h2>
                  <p>{category.description}</p>
                </div>
                <span className="category-count">{category.plants.length} plants</span>
              </div>
              <div className="product-grid">
                {category.plants.map((plant) => (
                  <article className="product-card" key={plant.id}>
                    <div className="product-image-wrap">
                      <img src={plant.image} alt={`${plant.name} plant`} loading="lazy" onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = '/images/plant-01.jpg';
                      }} />
                      <span className="product-category-label">{category.category}</span>
                    </div>
                    <div className="product-content">
                      <div className="product-title-row"><h3>{plant.name}</h3><span className="product-price">{currency.format(plant.cost)}</span></div>
                      <p>{plant.description}</p>
                      <button className={`button add-button${addedToCart[plant.name] ? ' added' : ''}`} type="button" disabled={addedToCart[plant.name]} onClick={() => dispatch(addItem(plant))}>
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}{!addedToCart[plant.name] && <span aria-hidden="true">＋</span>}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
