import { createSlice } from '@reduxjs/toolkit'

interface FavoritePokemonState {
    listOfFavorite: {id: number; name: string}[]
}

const favoritePokemonSlice = createSlice({
    name: 'favoritePokemon',
    initialState: {
        listOfFavorite: [],
    },
    reducers: {
        add: (state: FavoritePokemonState, action: {
            payload: { id: number; name: string };
        }) => {
            state.listOfFavorite.push(action.payload)
        },
        remove: (state: FavoritePokemonState, action: {
            payload: number;
        }) => {
            const index = state.listOfFavorite.findIndex((item) => item.id === action.payload);

            state.listOfFavorite.splice(index, 1);
        },
    },
})

const { add, remove } = favoritePokemonSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addToFavorite = (name: {id: number; name: string}) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    // setTimeout(() => {
        dispatch(add(name))
    // }, 1000)
}

export const removeFromFavorite = (id: number) => (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    // setTimeout(() => {
        dispatch(remove(id))
    // }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getListOfFavorite = (state: {
    favoritePokemon: {
        listOfFavorite: string[];
    }
} ) => state.favoritePokemon.listOfFavorite;

export default favoritePokemonSlice.reducer