import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';
import data from './data.js';


function App() {

  let [shoes] = useState(data);
  console.log(shoes[0].title);

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

      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4">
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



export default App;
