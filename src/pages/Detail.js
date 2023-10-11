import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Detail(props) {

   //update (재랜더링) 시 사용법
   let [count, setCount] = useState(0);
   let [time, setTime] = useState(true);
   let [num, setNum] = useState('');
 
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


  return (
    <section className="container">
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
    </section> 
  )
}


export default Detail;