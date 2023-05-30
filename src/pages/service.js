import axios from "axios";

const BaseUrl = process.env.REACT_APP_WEB_URL;

export const getData = async ({ setPokemonList, setIsLoading }) => {
  try {
    const response = await axios.get(`${BaseUrl}/pokemon`);
    const data = response.data.results;
    setIsLoading(false);
    setPokemonList((prevList) => [...prevList, ...data]);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};

export const getDetail = async ({ setPokemonDetail, detail }) => {
  try {
    const response = await axios.get(`${BaseUrl}/pokemon/${detail}`);
    const data = response.data;
    setPokemonDetail(data);
  } catch (error) {
    console.log(error);
  }
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.split(" ").slice(0, maxLength).join(" ");
  return truncatedText + "...";
};

export const setBookMark = ({ pokemon, index, dispatch, favorite }) => {
  const favData = {
    data: pokemon,
    number: index + 1,
  };
  if (!favorite) {
    dispatch({ type: "FAVORITE", payload: [favData] });
  } else {
    const existingIndex = favorite.findIndex(
      (item) => item.number === index + 1
    );
    if (existingIndex !== -1) {
      const updatedFavPokemon = [...favorite];
      updatedFavPokemon.splice(existingIndex, 1);
      dispatch({ type: "FAVORITE", payload: updatedFavPokemon });
    } else {
      dispatch({ type: "FAVORITE", payload: [...favorite, favData] });
    }
  }
};

export const removeData = ({ number, dispatch, favorite }) => {
  const updatedFavorite = favorite.filter((data) => data.number !== number);
  dispatch({ type: "FAVORITE", payload: updatedFavorite });
};
