import { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Nav, Navbar } from 'react-bootstrap'
//import {Context1} from './../App.js'

function Detail(props) {

  //let {재고, shoes} = useContext(Context1) //보관함 해체

   //update (재랜더링) 시 사용법
   let [count, setCount] = useState(0);
   let [time, setTime] = useState(true);
   let [num, setNum] = useState('');
   let [탭, 탭변경] = useState(0);

 
   let { id } = useParams();
   console.log(typeof({ id }));
 
    //상품 고유 id 사용하여 출력
   let findShoes = props.shoes.find((data)=> { 
     return data.id == id
   });
   console.log(findShoes);

  // 컴포넌트 mount, update 시 실행됨
  useEffect(()=>{
    console.log('안녕');

    let a = setTimeout(()=>{ 
      setTime(false);
      console.log('3초 지나서 나와라');
    }, 3000);
    
    if (isNaN(num) == true){
      alert('숫자만 입력해');
    }
    
    return ()=> {
      // useEffect가 동작전에 실행됨, 매번실행되는 타이머 깨끗이 지우기
      console.log(1)
      clearTimeout(a);
    }
  }, [num])


  let [fade2, setFade2] = useState('')
  useEffect(()=>{
    let a = setTimeout(()=>{ setFade2('end') }, 100)    
    return () => {
      clearTimeout(a);
      setFade2('')
    }
  },[탭])

  return (
    <section className={`content start ${fade2}`}>
      {
        time == true
        ? <div className='alert alert-warning'>
          3초이내 구매시 할인
        </div>
        : null
      }

      {count} 개 - 
      <button className="btn btn-primary" onClick={()=>{ setCount(count+1) }}>업데이트 버튼</button>

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">

          <input placeholder="input에 숫자말고 다른거 입력하면 경고 안내메시지 띄우기"  onChange={(e)=>{ setNum(e.target.value) }} />
          
          <h4 className="pt-5">{ findShoes.title }</h4>
          <p>{ findShoes.content }</p>
          <p>{ findShoes.price }원</p>
          
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent shoes={props.shoes} 탭={탭}/>

    </section> 
  )
}

// props 사용하기 싫으면 {} 사용, 컴포넌트내에서 if 사용시 꼭 return 사용
// 1. Context API(리액트 기본문법), Redux 등 외부라이브러리
function TabContent({탭}) {
  // if (탭 == 0) {
  //   return <div>내용1111</div>
  // } else if (탭 == 1) {
  //   return <div>내용2222</div>
  // } else if (탭 == 2) {
  //   return <div>내용3333</div>
  // }

  let [fade, setFade] = useState('')
  //let {재고, shoes} = useContext(Context1) //보관함 해체

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade('end') }, 100)    
    return () => {
      clearTimeout(a);
      setFade('')
    }
  },[탭])

  return (
    <div className={`start ${fade}`}>
      { [<div>1111<br></br>111111</div>, <div>내용2222<br></br>2222222</div>, <div>내용3333<br></br>33333</div>][탭] }
    </div>
  )
}

export default Detail;