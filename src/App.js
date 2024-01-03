import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css'
import bg from './img/bg.jpg'
import data from './data.js'
import Detail from './pages/Detail.js'
import About from './pages/About.js'
import Event from './pages/Event.js'
import Cart from './pages/Cart.js'
import axios from 'axios'

export let Context1 = createContext() //state 보관함


function App() {

  //localStroge(문자만 가능, json) - 개발자도구 - Application
  //localStorage.setItem('age','20')    localStorage.getItem('age')     localStorage.removeItem('age')
  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거).name);

    //숙제 - 상세페이지에서 봤던 상품의 번호등을 localStorage에 저장하기  - wactched [0, 1]  set자료형
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
    
  },[])

  // 누가 Detail페이지 접속하면 그 페이지에 보이는 상품id 가져와서 localStorage에 Watched 항목에 추가 <- 자바스크립트로


  let navigate = useNavigate();  //페이지 이동 도와주는 함수
  let [shoes, setShoes] = useState(data);
  // let [재고] = useState([10, 11, 12]);
  let [click, setClick] = useState(0);
  let [hidden, setHidden] = useState(false);
  let [loading, setLoading] = useState(false);



  console.log(shoes[0].title);

  let moreProduct = function() {
    // https://sunshineyellow.tistory.com/134 참고    

    setLoading(true); // 로딩 상태를 true로 설정하여 로딩 중임을 표시

    let url;
    if (click === 1) {
      url = 'https://codingapple1.github.io/shop/data2.json';
    } else if (click === 2) {
      url = 'https://codingapple1.github.io/shop/data3.json';
    } else if (click > 2) {
      setHidden(true);
      setLoading(false);
      // alert('상품없음');
      return;
    }
    // { 
    //   click === 1 && axios.get('https://codingapple1.github.io/shop/data2.json')
    //   click === 2 && axios.get('https://codingapple1.github.io/shop/data3.json')
    //   click === 3 && alert('상품없음');
    // }


    // ajax 쓰려면 옵션 3개중 택1
    // 1. XMLHttpRequest  2. fetch()   3. axios
    axios.get(url)
    .then((res)=>{ 
      console.log(res.data);
      console.log(shoes);
      let newProduct = res.data; // 가져온 데이터를 newProduct 변수에 저장
      let copy = [...shoes, ...newProduct]; // 기존 상품 목록(props.shoes)과 새로운 상품(newProduct)을 합친 새로운 배열을 생성
      setShoes(copy); // 합쳐진 상품 목록을 설정  
      setLoading(false);
    })
    .catch(()=>{
      console.log('실패');
    })

    // Promise.all([ axios.get('/url1'), axios.get('/url2') ])
    // .then(()=>{
    // })
    // axios.post('/url1, {name : "kim"}')

    // fetch('https://codingapple1.github.io/shop/data2.json')
    // .then(결과 => 결과.json())
    // .then(data=>{})
  }

  let buttonClick = function() {
    setClick(click + 1); // 버튼 클릭 시 클릭 횟수를 1 증가시킴
  }

  useEffect(()=> {
    if (click !== 0) {
      moreProduct(); // 클릭 횟수가 0이 아니면 moreProduct 함수를 호출하여 추가 상품 가져오기
    }
  }, [click]);

  
  return (
    <div className="App">

      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }} activestyle={{color : "green"}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }} activeClassName="active">이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route exact path="/" element={
          <>
            <section className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></section>
            <section className="content">
              <div className="row align-items-start">
                {
                  shoes.map((a, i)=> {
                    return (
                      <Card shoes={ shoes[i] } i={ i } key={ i }></Card>
                    )
                  })
                }
              </div>

              {hidden && <Hidden />} 
              {loading && <Loading />}
          
              {
                hidden == false
                ? <button className="btn btn-primary btn-lg" onClick={()=>{ buttonClick(); }}>더보기 버튼</button>
                : null
              }              
            </section>

            {/* 최근 본 상품 숙제 */}
            <section className='recently'>
              <h3>최근 본 상품</h3>
              <ul>
                <li><img src='https://codingapple1.github.io/shop/shoes1.jpg'/></li>
                <li><img src='https://codingapple1.github.io/shop/shoes2.jpg'/></li>
              </ul>
              <div>TOP</div>
            </section>


          </>
        } />

        <Route path="/detail/:id" element={ 
          // <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          // </Context1.Provider>
        }></Route>
        
        <Route path="/cart" element={ <Cart/> } />

        {/* nested router 기법 */}
        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>멤버임</div> } />
          <Route path="location" element={ <div>위치</div> } />
        </Route>

        <Route path="/event" element={ <Event/> }>
          <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> } />
          <Route path="two" element={ <p>생일기념 구폰 받기</p> } />
        </Route>

        <Route path="*" element={ <div>404page <br/> 없는 페이지</div> } />
      </Routes>
    </div>
  )
}

function Hidden() {
  return (
    <div className="alert alert-warning">
      상품이 더 없습니다.
    </div>
  )
}

function Loading() {
  return (
    <div className="alert alert-warning">
      로딩중....
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <NavLink to="/detail/1"><img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" /></NavLink>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  );
}


export default App;


// 장바구니 페이지 만들기 & Redux 1 : Redux Toolkit 설치