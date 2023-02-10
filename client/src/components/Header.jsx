import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom'



function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="mb-5">
      <nav className="navigation flex flex-row sm:justify-around items-center xs:justify-between shadow-sm px-4">
        <h3 className="heading font-bold md:basis-2/6 text-2xl xs:basis-1/2 z-50">E-commerce</h3>

        <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-1/2 md:justify-end active" : " nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
          <li><Link className="no-underline font-semibold" to="/" onClick={()=>{setActive(!active)}}>Products</Link></li>
          <li><Link className="no-underline font-semibold" to="/cart" onClick={()=>{setActive(!active)}}>Cart</Link></li>
        </ul>
        <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active) }}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
