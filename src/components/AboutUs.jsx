export default function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="eyebrow">A little more green, every day</p>
          <h2 id="about-title">Rooted in a love of living things.</h2>
          <p>Paradise Nursery is an independent plant shop for people who want to bring the restorative beauty of nature into their homes. We believe a happy plant can make an everyday space feel more welcoming.</p>
          <p>Our mission is to make plant care feel joyful and approachable. We select healthy, characterful houseplants and share thoughtful guidance so you can find a plant that fits your space, light, and routine.</p>
          <p>From leafy indoor favorites to small succulents and fresh air-friendly greenery, every plant is chosen to help your home grow into its own little paradise.</p>
        </div>
        <div className="about-note" aria-label="Our promise">
          <span className="about-note-mark" aria-hidden="true">✳</span>
          <p>Good plants.<br />Gentle guidance.<br /><strong>Room to grow.</strong></p>
          <span className="about-note-caption">Grown with care at Paradise Nursery</span>
        </div>
      </section>
    </div>
  );
}
