import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    setUser(null);
    setError(null);

    axios
      .get("endPont")
      .then((res) => {
        setLoading(false);
        setUser(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      {loading && <p>loading ...</p>}
      {error && <p>{error}</p>}
      {user && <div>user loaded !</div>}
    </div>
  );
}

export default App;
