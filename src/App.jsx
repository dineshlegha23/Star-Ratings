import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./app.css";

function App() {
  const [rating, setRating] = useState();
  const [mouseMove, setMouseMove] = useState();

  return (
    <>
      <div className="stars">
        {[...Array(10)].map((_, index) => {
          return (
            <FaStar
              key={index}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setMouseMove(index + 1)}
              onMouseLeave={() => setMouseMove(rating)}
              className={`${index < mouseMove ? "active" : "inactive"}`}
            />
          );
        })}
      </div>
      <br />
      <div className="rating">
        {rating && <p>Rating:{rating}</p>}
        <br />
        <button
          onClick={() => {
            setRating(), setMouseMove();
          }}
        >
          Clear Rating
        </button>
      </div>
    </>
  );
}

export default App;
