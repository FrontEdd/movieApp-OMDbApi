import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("movieapp.shoppingcart")) ?? []
  );

  // que debemos guardar
  //* obj pelicula
  //* cantidad (como minimo 1)

  function saveInCart(movie, user_id) {
    const object = {
      movie,
      user_id,
      quantity: 1,
    };

    items[items.length] = object;
    setItems(items);
    saveInLocalStorage(items);
  }

  function saveInLocalStorage(items) {
    localStorage.setItem("movieapp.shoppingcart", items);
  }

  return (
    <ShoppingCartContext.Provider value={{ items, saveInCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

