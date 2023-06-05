import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnCLickOutside";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { path: '/', text: 'Home' },
        { path: 'about', text: 'About' },
      ];
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, dropdown, () => setDropdown(false));
    return (
      <nav>
        <ul>
        {links.map((link) => {
        return (
          <li key={link.text}>
            <NavLink to={link.path}   className={({ isActive }) =>
    isActive ? 'active__class' : undefined
  }   style={({ isActive }) => ({
    color: isActive ? 'red' : undefined,
  })}>{link.text}</NavLink>
            
          </li>
        );
      })}
        </ul>
      </nav>
    );
  };
  export default Navbar;