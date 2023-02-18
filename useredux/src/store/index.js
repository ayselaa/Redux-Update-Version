import { createSlice, configureStore } from "@reduxjs/toolkit";

//#region Counter Slice
const initialCounter = {
  valuecounter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    Increment(state) {
      state.counter++;
    },
    Decrement(state) {
      state.counter--;
    },
    Increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    Showtoggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
//#endregion

const initialAuthState = {
  isAuthentication: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    Login(state) {
      state.isAuthentication = true;
    },
    Logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
