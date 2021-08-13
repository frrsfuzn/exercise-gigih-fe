import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeGifs } from "../../features/gif/gifSlice";
import SearchBar from "../searchBar";
// import MediaCard from '../mediaCard';
// import AppBar from '../appBar';

function Search() {
  // const [gifs, setGifs] = useState([]);
  const gifs = useSelector((state) => state.gifs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(storeGifs([]));
    };
  }, []);

  // get keyword from input and search it
  const handleSubmit = (e) => {
    e.preventDefault();
    let keyword = e.target[0].value;
    if (keyword) {
      fetchGifs(keyword);
    } else {
      alert("Please insert keyword");
    }
  };

  // Get Gifs from API
  const fetchGifs = (keyword) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=RNlXXAKSsKFcSJPSSOJpzFMPdstGHZoo&q=${keyword}&limit=12`
    )
      .then((response) => response.json())
      .then((data) => dispatch(storeGifs(data)));
  };

  // Render img with gifs data
  const renderGifs = () => {
    if (gifs.data) {
      return gifs.data.map((item) => (
        <img alt="gif img" key={item.id} src={item.images.original.url} />
      ));
    }
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
			{/* <AppBar/>
			<MediaCard/> */}
      {renderGifs()}
    </div>
  );
}

export default Search;
