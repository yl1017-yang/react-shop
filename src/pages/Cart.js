import { useParams } from "react-router-dom"
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase } from './../store/userSlice.js'
import { addCount, deleteItem, minusCount } from './../store/cartSlice.js'

function Cart() {

  let state = useSelector((state)=>{ return state })  //Redux store 가져와줌
  //let a = useSelector((state)=> return state.user )
  console.log(state.cart[0])
  let dispatch = useDispatch()  //store.js로 요청보내주는 함수

  let { id } = useParams();
  console.log(typeof({ id }));

  return (
    <div>

      <div>
        <h2>{state.user.name} {state.user.age}의 장바구니</h2>
        <button onClick={()=>{ dispatch(increase(100)) }} className="btn btn-primary btn-lg">버튼</button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>순서</th>
            <th>상품명</th>
            <th>수량</th>
            <th colSpan={2}>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a, i)=>
            <tr key={i}>
              <td>{ state.cart[i].id }</td>
              <td>{ state.cart[i].name }</td>
              <td>{ state.cart[i].count }</td>
              <td>
                <button onClick={()=>{ 
                  dispatch(addCount(state.cart[i].id)) 
                }} className="btn btn-warning btn-sm">수량 +</button>
              </td>
              <td>
                <button onClick={()=>{ 
                  dispatch(minusCount(state.cart[i].id)) 
                }} className="btn btn-warning btn-sm">수량 -</button>
              </td>
              <td>
                <button onClick={()=>{
                  dispatch(deleteItem(state.cart[i].id))
                }} className="btn btn-secondary btn-sm">삭제</button>
                {/* <button onClick={(e)=>{
                  dispatch(deleteItem(e.target.parentElement))
                }} className="btn btn-secondary btn-sm">삭제</button> */}
              </td>
            </tr>
            )
          }
          
          {/* "0번째 버튼을 누르면 state의 0번째 상품을 +1 해주세요~"
          "1번째 버튼을 누르면 state의 1번째 상품을 +1 해주세요~" */}
          {/* + 버튼 누르면 id 값을 가져와서 수량 +1 : detail 참조 */}
          {/* detail 주문하기 1번째 항목 수량 +1 */}
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart

//Redux 4 : state가 object/array일 경우 변경하는 법