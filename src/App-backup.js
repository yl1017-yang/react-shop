import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';

function App() {
  return (
    <div className="App">

      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">REACT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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


export default App;
