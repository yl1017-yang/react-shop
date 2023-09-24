import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import bg from './img/bg.jpg'
import data from './data.js'
import Detail from './pages/Detail.js'



import styled from "styled-components";

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`
let NewBtn = styled.button(YellowBtn)`
  padding: 20px;
`
let Box = styled.div`
  background : #f9f9f9;
  padding : 20px;
`


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
  useEffect(()=>{
    console.log('안녕');
    // for (var i = 0; i < 10000; i++){
    //   console.log(1);
    // }
  })


function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);
  let navigate = useNavigate();  //페이지 이동 도와주는 함수  

  return (
    <div className="App">

          <Box>
            <button className="btn btn-danger">주문하기</button>
            <YellowBtn bg="blue">노란색버튼</YellowBtn>
            <YellowBtn bg="orange">오렌지버튼</YellowBtn>
          </Box>

      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />

      <section className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></section>

      <div class="container">
        <div class="row align-items-start">
          <div className="col-md-4">
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} />  public 폴더 이미지 쓰는 권장방식 - process.env.PUBLIC_URL 내 사이트 경로임 */}
            <img src="https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg" width="100%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_1280.jpg" width="100%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/12/17/23/39/baby-shoes-3881526_1280.jpg" width="100%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>

    </div>
  );
}


function Detail(props) {  



    //update (재랜더링) 시 사용법
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)

  let {id} = useParams();
  console.log('파라미터' + id);

   //상품 고유 id 사용하여 출력
  let findShoes = props.shoes.find((data)=> { 
    return data.id == id;
  })
  console.log(findShoes);


  useEffect(()=>{
    console.log('안녕');

    setTimeout(()=>{ 
      setAlert(false);
      console.log('3초 지나서 나와라');
    }, 3000);
  })
 

  return (
    <section className="container">
      { alert &&
        <div className='alert alert-warning'>
          3초이내 구매시 할인
        </div>
      }

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{ findShoes.title }</h4>
          <p>{ props.shoes[id].content }</p>
          <p>{ props.shoes[id].price }원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </section> 
  )
}

// vive 사이트 참고
//강의내용 - input 다루기 2 : 블로그 글발행 기능 만들기
// 리액트 git 배포 : https://velog.io/@bami/React-GitHub-Pages에-배포하기
// https://medium.com/hcleedev/web-react-프로젝트-github-pages로-배포하기-f62e59a2e210
// npm install gh-pages
// npm run build     npm run deploy

// 페이지 나누는 법(리액트 사용)
// index.html만 사용
// 1. 컴포넌트 만들어서 상세페이지 내용 채움
// 2. 누가/detail 접속하면 그 컴포넌트 보여줌
// react-router-dom 사용
// npm install react-router-dom@6


// 라우터 장점
// 1. 뒤로가기 버튼 이용가능
// 2. 페이지 이동의 쉬움


export default App;
