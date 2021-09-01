import { configureStore } from '@reduxjs/toolkit'
import favoritePokemonReducer from "../pageComponents/favoritePokemon/slice";

export const store = configureStore({
    reducer: {
        favoritePokemon: favoritePokemonReducer,
        test2: favoritePokemonReducer
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>