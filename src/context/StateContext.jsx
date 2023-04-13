import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  // const [filter, setFilter] = useState([]);
  // const [activeGenre, setActiveGenre] = useState([0]);

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_MOVIE", payload: popular });
  }, [popular]);

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b1ae0eee69d0da84f5106587befce2d0&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopular(results);
    //   setFilter(results);
  };

  const initialState = {
    movies: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateContextCustom = () => useContext(StateContext);
