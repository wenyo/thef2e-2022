import { useState, useEffect } from 'react';
import Home from './views/Home';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 4000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return <div className="App">{isLoading ? <Loading /> : <Home />}</div>;
}

export default App;
