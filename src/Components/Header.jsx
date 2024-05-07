export const Header = () => {
    return(
        <header className="header" id="header">
        <div className="container">
          <a href="" className="header__logo">Your Logo</a>
          <nav className="header__menu">
            <a href="#" className="header__link">HOME</a>
            <a href="#" className="header__link">SHOP</a>
            <a href="#" className="header__link">LOOKBOOK</a>
            <a href="#" className="header__link">FEATURES</a>
            <a href="#" className="header__link">PAGES</a>
            <a href="#" className="header__link">BLOG</a>
            </nav>
            <nav className='menu__icon'>
              <div className='icons'></div>
            </nav>
        </div>
      </header>
    )
}