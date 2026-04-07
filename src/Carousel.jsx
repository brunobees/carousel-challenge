import "./Carousel.css";

export default function Carousel({ slides }) {
  // TODO: implement carousel state and navigation logic

  return (
    <div className="carousel">
      <h2>Carousel</h2>

      {/* TODO: render the current slide here */}
      <div className="slide" style={{ background: "#ccc" }}>
        <h3>—</h3>
        <p>Implement me</p>
      </div>

      <div className="carousel-controls">
        {/* TODO: add prev/next buttons with proper disabled logic */}
      </div>
    </div>
  );
}
