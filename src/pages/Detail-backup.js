import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Detail(props) {

   //update (재랜더링) 시 사용법
   let [count, setCount] = useState(0)
   let [alert, setAlert] = useState(true)
 
   let { id } = useParams();
   console.log(typeof({ id }));
 
    //상품 고유 id 사용하여 출력
   let findShoes = props.shoes.find((data)=> { 
     return data.id == id
   });
   console.log(findShoes);

   // 컴포넌트의 Lifecycle
  // 페이지에 장착되가고하고 (mount)
  // 가끔 업데이트도 되고 (update)
  // 필요없으면 제거되거(unmount)

  // 예전스타일
  class Deatil2 extends React.Component {
    componentDidMount(){
      //컴포넌트 mount시 여기 코드 실행됨
    }
    componentDidUpdate(){
      //컴포넌트 update시 여기 코드 실행됨
    }
    componentWillUnmount(){
      //컴포넌트 삭제시 여기 코드 실행됨
    }
  }

  // 컴포넌트 훅(갈고리) 다는 법, useEffect 안에 있는 코드는 html 렌더링 후에 동작, 오래 걸리는 쓸데없는 코드는 useEffect에 작성해야 속도가 빨라짐
  // useEffect 안에 적는 코드들은 - 어려운 연산 - 서버에서 데이터가져오는 작업 - 타이머 장착하는거

  // 컴포넌트 mount, update 시 실행됨
  useEffect(()=>{
    console.log('안녕');

    let a = setTimeout(()=>{ 
      setAlert(false);
      console.log('3초 지나서 나와라');
    }, 3000)
    console.log(2)
    
    return ()=> {
      // useEffect가 동작전에 실행됨, 매번실행되는 타이머 깨끗이 지우기
      // clean up function 은 mount시 실행안됨 unmout시 실행됨
      // 기존 데이터 요청은 제거해주세요!
      console.log(1)
      clearTimeout(a);
    }
  }, [])
  // useEffect 실행조건 넣을 수 있는 곳은 [디펜서시], count 라는 state가 변할때만 실행됨
  // 컴포넌트 mount시 1회만 실행하고 싶으면 [] 아무것도 넣지 않음




  useEffect(()=>{ }) // 1.재렌더링마다 코드실행하고 싶으면
  useEffect(()=>{ }, []) // 2.mount시 1회 코드 실행하고 싶으면
  useEffect(()=>{ 
    return ()=>{
      //3. unmount시(컴로넌트 삭제) 1회 코드 실행하고 싶으면
    }
  }, [])

  // 4.useEffect 실행 전에 뭔가 실행하려면 언제나 return()=>{}
  useEffect(()=>{ }, [count]) // 5.특정 state변경시에만 실행하고 싶으면 [state명]



  return (
    <section className="container">
      {/* { alert &&
        <div className='alert alert-warning'>
          3초이내 구매시 할인
        </div>
      } */}
      { 
        alert == true
        ? <div className='alert alert-warning'>
          3초이내 구매시 할인
        </div>
        : null
      }

      {count}
      <button onClick={()=>{ setCount(count+1) }}>업데이트 버튼</button>

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ findShoes.title }</h4>
          <p>{ findShoes.content }</p>
          <p>{ findShoes.price }원</p>
          
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </section> 
  )
}


export default Detail;