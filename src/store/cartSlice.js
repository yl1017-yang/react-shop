import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 1, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
    {id : 3, name : 'Good shoes', count : 3},
  ],
  reducers : {
    increaseCart(state, action){
      state.count += action.payload
      // return state.filter(state => state.id !== action.payload)
    }
  }
})

export let {increaseCart} = cart.actions

export default cart