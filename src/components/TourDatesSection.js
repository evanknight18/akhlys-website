import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TourDatesSection = () => {
  const [tourDates, setTourDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourDates = async () => {
      try {
        const response = await axios.get('https://rest.bandsintown.com/artists/{{Akhlys}}/events/?app_id=yOUrSuP3r3ven7aPp-id'); // Replace with your API endpoint
        setTourDates(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTourDates();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="tour-dates p-4">
      <h2>Tour Dates</h2>
      <p>Check out our upcoming shows...</p>
      <ul>
        {tourDates.map((date) => (
          <li key={date.id}>
            <strong>{date.city}</strong> - {date.venue} - {new Date(date.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TourDatesSection;
