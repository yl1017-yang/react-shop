import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

// Reduct의 state 변경하는 법
// 1. state변경해주는 함수 만들기
// 2. export 하기
// 3. dispatch(변경함수())


let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1},
    {id : 3, name : 'Good shoes', count : 3},
  ]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
   }
}) 