import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const initialState = {
    id:"",
    username:"",
    email:"",
    isLogged: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.id = payload.id;
            state.username = payload.displayName;
            state.email = payload.email;
            state.isLogged = true;
        },
        removeUser: () => {
            storage.removeItem('persist:root');
            return { ...initialState };
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;