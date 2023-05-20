import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userInfo : {
        name: null,
        surname: null,
        status : null,
    },
    loading: true
  },
  reducers: {
    setUser : (state, parameter) =>{
      state.userInfo = parameter.payload;
      state.loading = false;
    },
    loaded: state => {
      state.loading = false;
    }
  }
})

export const { setUser, loaded } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

/* Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))


store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
store.dispatch(changeValue(1000))
*/
