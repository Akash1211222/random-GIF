import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";
import Tag from "../components/Tag";

const useGif = (tag) => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=o9YdRT9uDyAvhnSRhf3fI1bGbfF8pye1`;
  //   const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=o9YdRT9uDyAvhnSRhf3fI1bGbfF8pye1&tag=${tag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
