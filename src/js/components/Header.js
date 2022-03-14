import Container from '../elements/Container';
import Nav from '../elements/Nav';
import A from '../elements/A'

import '../../css/Header.css';
import logo from '../../img/logo.png'

function Header() {
  const navItems = [
    'HOME',
    'ABOUT',
    'WORK',
    'SERVICES',
    'BLOG',
  ];

  return (
    <div className="header">
      <Container>
        <div className="header__content">
          <A  href={'#'} className='header__logo'>
            <img src={logo} alt='logo' className='header__logo_img'/>
          </A>
          <Nav
            items={navItems}
            className='header__nav'
            classNameLink='header__nav_link'
          />
          {/* SEARCHE */}
        </div>
      </Container>
    </div>
  );
}

export default Header;