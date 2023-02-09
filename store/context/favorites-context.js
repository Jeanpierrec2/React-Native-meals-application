import { createContext, useState } from "react";

export const Context = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

function FavoriteContextProvider({children}) {

    const [favoriteMealIds,setFavoriteMealIds] = useState([])

    const addFavorite = (id) => {
      setFavoriteMealIds((prev) => [...prev, id])
    }

    const removeFavorite = (id) => {
      setFavoriteMealIds((prev) => prev.filter(mealId => mealId !== id ))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
        
    
}

export default FavoriteContextProvider