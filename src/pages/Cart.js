import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase } from './../store/userSlice.js'

function Cart() {

  let state = useSelector((state)=>{ return state })  //Redux store 가져와줌
  //let a = useSelector((state)=> return state.user )
  console.log(state.cart[0])
  let dispatch = useDispatch()  //store.js로 요청보내주는 함수

  return (
    <div>

      <h2>{state.user.name} {state.user.age}의 장바구니</h2>
      <button onClick={()=>{ dispatch(increase(100)) }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
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
                  dispatch(changeName())
                }}>+</button>
              </td>
            </tr>
            )
          }
          
          {/* + 버튼 누르면 id 값을 가져와서 수량 +1 : detail 참조 */}
          {/* detail 주문하기 1번째 항목 수량 +1 */}
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart

//Redux 4 : state가 object/array일 경우 변경하는 법