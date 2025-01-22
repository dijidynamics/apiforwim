import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]); // Ensure it's initialized as an array
  const [error, setError] = useState(null); // Track errors
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3010/getlogindetails');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('API Response:', data);

        // Since the response is already an array, set it directly
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          throw new Error('Unexpected API response format.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message); // Set error state
      } finally {
        setLoading(false); // End loading state
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Login Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : items.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>Mobile</th>
              <th>Position</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.username}</td>
                <td>{item.usermobile}</td>
                <td>{item.position}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available. </p>
      )}
    </div>
  );
}

export default App;
