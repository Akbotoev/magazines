import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <header className="header" id="header">
        <div className="container">
          <NavLink to="/" className="header__logo">Your Logo</NavLink>
          <NavLink className="header__menu">
            <NavLink  to="Home" className="header__link">HOME</NavLink>
            <NavLink to="Shop" className="header__link">SHOP</NavLink>
            <NavLink to="LookBook" className="header__link">LOOKBOOK</NavLink>
            <NavLink to="Features" className="header__link">FEATURES</NavLink>
            <NavLink to="Pages" className="header__link">PAGES</NavLink>
            <NavLink to="Blog" className="header__link">BLOG</NavLink>
            </NavLink>
            <nav className='menu__icon'>
              <div className='icons'></div>
            </nav>
        </div>
      </header>
    )
}