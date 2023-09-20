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
          <div class="col-md-4">
            {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} />  public 폴더 이미지 쓰는 권장방식 - process.env.PUBLIC_URL 내 사이트 경로임 */}
            <img src="https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2014/05/18/11/26/shoes-346986_1280.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div class="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2018/12/17/23/39/baby-shoes-3881526_1280.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
