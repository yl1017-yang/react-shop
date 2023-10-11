import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Outlet, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './img/bg.jpg'
import data from './data.js'
import Detail from './pages/Detail.js'
import About from './pages/About.js'
import Event from './pages/Event.js'
import axios from 'axios'

function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);
  let navigate = useNavigate();  //페이지 이동 도와주는 함수  

  return (
    <div className="App">

      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="/">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }} activestyle={{color : "green"}}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }} activeClassName="active">이벤트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
          <>
            <section className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></section>
            <section className="container">
              <div className="row align-items-start">
                {
                  shoes.map((a, i)=> {
                    return (
                      <Card shoes={ shoes[i] } i={ i } key={ i }></Card>
                    )
                  })
                }
              </div>
              <button className="btn btn-primary" onClick={()=>{
                // ajax 쓰려면 옵션 3개중 택1
                // 1. XMLHttpRequest  2. fetch()   3. axios
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  console.log(결과.data)
                })
                .catch(()=>{
                  console.log('실패')
                })

              }}>버튼</button>
              <div>버튼 누르면 html 생성 state 사용 - 리액트에서 서버와 통신하려면 ajax 1</div>
            </section>
          </>
        } />

        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
        {/* url 파라미터 */}

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

function Card(props) {
  return (
    <div className="col-md-4">
      <NavLink to="/detail/1"><img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" /></NavLink>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  );
}


// Lifecycle과 useEffect 2




export default App;