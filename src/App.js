import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './img/bg.jpg'
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail.js'


function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);

  return (
    <div className="App">      

      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>      

      <Routes>
        <Route path="/" element={
          <>
            <section className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></section>
            <div className="container">
              <div className="row align-items-start">
                {
                  shoes.map((a, i)=> {
                    return (
                      <Card shoes={ shoes[i] } i={ i }></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        <Route path="/detail" element={Detail} />
      </Routes>

      

    </div>
  );
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

//리액트 라우터 1 : 셋팅이랑 기본 라우팅

export default App;
