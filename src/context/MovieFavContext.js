import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const MovieFavContext = createContext();

export const MovieFavProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const favorites =
        JSON.parse(localStorage.getItem("movieapp.favorites")) ?? [];
    const [favMovies, setFavMovies] = useState(favorites);

    const addToFavorite = (movie) => {
        const favorite = {
            movie,
            created_favorited: new Date(),
            user_id: user.id,
        };

        favMovies[favMovies.length] = favorite;
        setFavMovies(favMovies);
        saveInLocalStorage(favMovies);
    };

    const removeFavorite = (id) => {
		const newFavoriteMovies = favMovies.filter(
			(favorite) => favorite.movie.imdbID !== id
		);
		setFavMovies(newFavoriteMovies);
		saveInLocalStorage(newFavoriteMovies);
	};

    const saveInLocalStorage = (favorites) => {
		localStorage.setItem("movieapp.favorites", JSON.stringify(favorites));
	};
    
      // vamos hacer una funcion que retorne 1 o 0
      // si el id existe en nuestro localStorage retornamos si no
      const isIncludeInFavorites = (id) => {
        const movie = favMovies.findIndex((favorite) => 
        favorite.movie.imdbID === id && favorite.user_id === user.id
            );
    
        // cuando findIndex no encuentra a un elemento retorna -1
        return movie === -1 ? 0 : 1;
      };

    return (
        <MovieFavContext.Provider
            value={{
                favMovies,
                addToFavorite,
                isIncludeInFavorites,
                removeFavorite,
            }}
        >
            {children}
        </MovieFavContext.Provider>
    );
};