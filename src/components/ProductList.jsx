import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { categories, plants } from '../data/plants';
import Navbar from './Navbar';

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartIds = new Set(cartItems.map((item) => item.id));

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
        {categories.map((category, categoryIndex) => {
          const categoryPlants = plants.filter((plant) => plant.category === category.name);
          const sectionId = `plant-category-${categoryIndex + 1}`;
          return (
            <section className="plant-category" key={category.name} aria-labelledby={sectionId}>
              <div className="category-heading">
                <div>
                  <p className="eyebrow">Collection {String(categoryIndex + 1).padStart(2, '0')}</p>
                  <h2 id={sectionId}>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
                <span className="category-count">{categoryPlants.length} plants</span>
              </div>
              <div className="product-grid">
                {categoryPlants.map((plant) => {
                  const isAdded = cartIds.has(plant.id);
                  return (
                    <article className="product-card" key={plant.id}>
                      <div className="product-image-wrap">
                        <img src={plant.image} alt={`${plant.name} plant`} loading="lazy" onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = '/images/plant-01.jpg';
                        }} />
                        <span className="product-category-label">{plant.category}</span>
                      </div>
                      <div className="product-content">
                        <div className="product-title-row">
                          <h3>{plant.name}</h3><span className="product-price">{currency.format(plant.price)}</span>
                        </div>
                        <p>{plant.description}</p>
                        <button className={`button add-button${isAdded ? ' added' : ''}`} type="button" disabled={isAdded} onClick={() => dispatch(addItem(plant))}>
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}{!isAdded && <span aria-hidden="true">＋</span>}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
