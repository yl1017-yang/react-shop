import { Outlet } from 'react-router-dom'

function About(props) {
  return (
    <div>
      <h4>회사소개</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default About;