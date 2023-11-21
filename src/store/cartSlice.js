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
      // state[0].count++
      // state[action.payload].count++
      let 번호 = state.findIndex((a)=>{ return a.id === action.payload })
      state[번호].count++
    },
    minusCount(state, action){
      // state[0].count++
      // state[action.payload].count++
      let nums = state.findIndex( (am) => { return am.id === action.payload });
      if (state[nums].count > 1)  state[nums].count--;
    },
    addItem(state, action){
      state.push(action.payload)
      // let 카운트 = state.findIndex((a)=>{ return a.count === action.playolad})
      // state[카운트].push().count++
    },
    deleteItem(state, action){
      // action.payload.remove();
      let 삭제 = state.filter( item => item.id !== action.payload );
      return 삭제;
      //https://jurgen-94.tistory.com/42 참고
    }
  }
})

// addCount(1)
// addItem({id : 1, name : 'White and Black', count : 2})

// store의 state 수정은
// 1. 수정함수 만들기
// 2. export
// 3. 원하는 곳에서 import해서 사용

export let {addCount, addItem, minusCount, deleteItem} = cart.actions

export default cart