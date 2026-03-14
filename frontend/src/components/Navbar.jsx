import React  from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(){
    return (
        <>
      <a className="navbar-brand" href="#">
      <img src="/logo.svg.png" className="logo-img" />
    </a>
        <nav id="navbar" class="navbar navbar-expand-lg ">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">
          <i className="fa-regular fa-house"></i> <br /> 
          <span className="nav-text">home</span>
          </Link>
        </li>
        <li className="nav-item" >
            <Link className="nav-link " to={"/CarBookingForm"}>
            <i className="fa-solid fa-car"></i>
            <br /> 
          <span className="nav-text">book</span>
          </Link>

        </li>
      <li className="nav-item">
        <Link className="nav-link">
        <i className="fa-solid fa-image"></i>
         <br /> 
          <span className="nav-text">gallary</span>
        </Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link">
        <i class="fa-solid fa-mobile-retro"></i>
         <br /> 
          <span className="nav-text">contact us</span>
        </Link>
      </li>
      </ul>
      
    </div>
  </div>

</nav>
 <Link className="watsapp-book"
          href="https://wa.me/917498719145?text=Hello%20I%20want%20to%20book%20a%20trip" 
         target="_blank" style={{"background":"green","color":"white","padding":"10px 15px","border-radius":"5px","text-decoration":"none"}}>
Book on watsapp
</Link>
        </>
    )
}