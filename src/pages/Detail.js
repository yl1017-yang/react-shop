import { useParams } from "react-router-dom";

function Detail(props) {

  let { id } = useParams();
  console.log(typeof({ id }));

   //상품 고유 id 사용하여 출력
  let findShoes = props.shoes.find((data)=> { 
    return data.id == id
  });
  console.log(findShoes); 

  return (
    <section className="container">
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