import React from "react";
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <nav>
        <div className="nav-wrapper white" style={{color:"black"}}>
          <Link href to="/" className="brand-logo left">Passit</Link>
          <ul id="nav-mobile" className="right ">
            <li><Link href to="/signin">Signin</Link></li>
            <li><Link href to="/signup">Signup</Link></li>
            <li><Link href to="/profile">Profile</Link></li>
            <li><Link href to="/create">Create Post</Link></li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar