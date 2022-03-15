import { NavLink } from "react-router-dom";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        <NavLink to="/about-tablet" id="about-tab" className="sidebar-nav">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/join-tablet" id="join-team" className="sidebar-nav">
        <li>Join Our Team</li>
        </NavLink>
        <NavLink to="/affiliate-programs" id="affiliate-prog" className="sidebar-nav" activeClassName="sidbar-nav-active">
        <li>Affiliate Program</li>
        </NavLink>
      </ul>
      <img
        src="//static.prod.r53.tablethotels.com/media/ecs/global/assets/logos/about-logos.png"
        width="130"
        alt="IATA"
        border="0"
      ></img>
    </div>
  );
}

export default Sidebar;
