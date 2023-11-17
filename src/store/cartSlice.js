import { createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 1, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
    {id : 3, name : 'Good shoes', count : 3},
  ],
  reducers : {
    addCount(state, action){
      // state[action.payload].count++
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++      
    }
  }
})

export let {addCount} = cart.actions

export default cart