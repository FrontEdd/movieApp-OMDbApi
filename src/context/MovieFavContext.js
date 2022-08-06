import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const MovieFavContext = createContext();

export const MovieFavProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const favorites =
        JSON.parse(localStorage.getItem("movieapp.favorites")) ?? [];
    const [favMovies, setFavMovies] = useState(favorites);

    const addToFavorite = (id) => {
        const favorite = {
            id,
            created_favorited: new Date(),
            user_id: user.id,
        };
        if (favMovies.length === 0) {
            setFavMovies([favMovies]);
            saveInLocalStorage([favorite]);
            return;
        }

        favMovies[favMovies.length] = favorite;
        setFavMovies(favMovies);
        saveInLocalStorage(favMovies);
    };

    const saveInLocalStorage = (favorites) => {
        localStorage.setItem("movieapp.favorites", JSON.stringify(favorites));
      };
    
      // vamos hacer una funcion que retorne 1 o 0
      // si el id existe en nuestro localStorage retornamos si no
      const isIncludeInFavorites = (id) => {
        const movie = favMovies.findIndex((favorite) => 
            favorite.id === id && favorite.user_id === user.id
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
            }}
        >
            {children}
        </MovieFavContext.Provider>
    );
};