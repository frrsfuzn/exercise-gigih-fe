import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeGifs } from "../../features/gif/gifSlice";

function Trending() {
  // const [gifs, setGifs] = useState([]);
  const gifs = useSelector((state) => state.gifs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGifs();
    return () => {
      dispatch(storeGifs([]));
    };
  }, []);

  // Get Gifs from API
  const fetchGifs = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=RNlXXAKSsKFcSJPSSOJpzFMPdstGHZoo`
    )
      .then((response) => response.json())
      .then((data) => dispatch(storeGifs(data)));
  };

  // Render img with gifs data
  const renderGifs = () => {
    if (gifs.data) {
      return gifs.data.map((item) => (
        <img data-testid='result' alt="gif img" key={item.id} src={item.images.original.url} />
      ));
    }
  };

  return (
    <div>
      <h1>Today&apos;s trending, just for you!</h1>
      {renderGifs()}
    </div>
  );
}

export default Trending;
