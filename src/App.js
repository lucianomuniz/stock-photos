import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

import Photo from './Photo';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    url = `${mainUrl}${clientID}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <h2>stock photos starter</h2>;
};

export default App;
