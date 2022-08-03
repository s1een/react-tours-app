import React, { useState, useEffect } from "react";
import Loading from "../src/components/Loading";
import Tours from "../src/components/Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Toures Left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {loading ? <Loading /> : <Tours removeTour={removeTour} tours={tours} />}
    </main>
  );
}

export default App;
