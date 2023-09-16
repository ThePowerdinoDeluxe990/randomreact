import { Outlet, Link } from "react-router-dom";

export default function Layout (){
  return(
<div>
  <nav>
    <h1>Layout</h1>
      <ul>
        <li><Link to={`/`}>Main page</Link></li>
        <li><Link to={`/about`}>about</Link></li>
      </ul>
  </nav>
</div>
  )
}