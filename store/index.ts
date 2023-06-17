import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type State = {
  /* your initial state shape here */
};

const initialState: State = {
  /* your initial state values here */
};

const counterSlice = createSlice({
  name: 'recipie-app',
  initialState,
  reducers: {
    // Define your reducer actions here
  },
});

// Extract the reducer and actions from the counterSlice
const { reducer, actions } = counterSlice;

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export default store;
