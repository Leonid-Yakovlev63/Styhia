import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    userInfo : {
        name: null,
        surname: null,
        status : null,
    }
  },
  reducers: {
    setUserName : (state, parametr) =>{
        state.userInfo.name = parametr.payload.name;
        state.userInfo.surname = parametr.payload.surname;
    },
    setStatus : (state, parametr) =>{
        state.userInfo.status = parametr.payload.status;
    }
  }
})

export const { setUserName } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))
store.dispatch(setUserName({name : 'Александр', surname: 'Пушкин'}))

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
