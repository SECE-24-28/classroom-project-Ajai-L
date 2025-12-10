import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/tasks"}>Tasks</NavLink>
          <NavLink to={"/notes"}>Notes</NavLink>
        </div>
      </header>
  )
}
export default Header;
