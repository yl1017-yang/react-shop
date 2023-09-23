import { useState } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './img/bg.jpg'
import data from './data.js'
import Detail from './pages/Detail.js'


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
            <Nav.Link onClick={()=>{ navigate('/about') }}>회사소개</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>이벤트</Nav.Link>
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
            </section>
          </>
        } />

        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />
        {/* url 파라미터 */}

        {/* nested router 기법 */}
        <Route path="/about" element={ <AboutPage/> }>
          <Route path="member" element={ <div>멤버임</div> } />
          <Route path="location" element={ <div>위치</div> } />
        </Route>

        <Route path="/event" element={ <EventPage/> }>
          <Route path="one" element={ <p>첫 주문시 양배추즙 서비스</p> } />
          <Route path="two" element={ <p>생일기념 구폰 받기</p> } />
        </Route>

        <Route path="*" element={ <div>404page <br/> 없는 페이지</div> } />
      </Routes>

    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <h4>회사소개</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  );
}

// Lifecycle과 useEffect 1

// vive.naver.com


export default App;