import { createContext, useState } from "react";

export const MovieFavContext = createContext();

export const MovieFavProvider = ({ children }) => {
    const favorites =
        JSON.parse(localStorage.getItem("movieapp.favorites")) ?? [];
    const [favMovies, setFavMovies] = useState([favorites]);

    // * Para poder crear/guardar la pelicula en mis favoritos
    // * Vamos a guardar 2 cosas:
        // id de la pelicula
        // fecha en la que se guarde el favorito

    const addToFavorite = (id) => {
        const favorite = {
            id,
            created_favorited: new Date(),
        };
        if (favMovies.length === 0) {
            setFavMovies([favMovies]);
            saveInLocalStorage([favorite]);
            return;
        }

        //* La segunda vez
    //! favoriteMovies [{ id: 1 }]
    //? favoriteMovies.length = 1
    //? quiero que  la posicion 1 sea igual a favorite
    //* favoriteMovies.length esto siempre sera uno mayor al indice
    //* favoriteMovies[favoriteMovies.length] = favorite
    // favoriteMovies[1] = favorite

    //* La tercera vez
    //! favoriteMovies [
    //  { id: 1 },
    //   {id: 2}
    //]
    //favoriteMovies.length = 2
    //* favoriteMovies[favoriteMovies.length] = favorite
    // favoriteMovies[2] = favorite

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
        const movie = favMovies.findIndex((favorite) => favorite.id === id);
    
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