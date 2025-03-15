import React, { useState } from "react";
import {Link} from "react-router-dom"

const Menu = () => {

  const [menuClick, setMenuClick] = useState(0)

  const handleMenuClick = (idx) => {
    setMenuClick(idx)
  }

  const menuClass = "menu"
  const activeMenuClass = "menu selected"

  return (
    <div className="menu-container">
      <img src="../../assets/kite-logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(0)}>
            <p className={menuClick===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link to="/orders" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(1)}>
          <p className={menuClick===1 ? activeMenuClass : menuClass}>Orders</p>
          </Link>
          </li>
          <li>
          <Link to="/holdings" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(2)}>
          <p className={menuClick===2 ? activeMenuClass : menuClass}>Holdings</p>
          </Link>
          </li>
          <li>
          <Link to="/positions" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(3)}>
          <p className={menuClick===3 ? activeMenuClass : menuClass}>Positions</p>
          </Link>
          </li>
          <li>
          <Link to="/funds" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(4)}>
          <p className={menuClick===4 ? activeMenuClass : menuClass}>Funds</p>
          </Link>
          </li>
          <li>
          <Link to="/apps" style={{textDecoration:"None"}} onClick={()=>handleMenuClick(5)}>
          <p className={menuClick===5 ? activeMenuClass : menuClass}>Apps</p>
          </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;