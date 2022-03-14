import Container from '../elements/Container';
import Nav from '../elements/Nav';
import A from '../elements/A';

import '../../css/Footer.css';

import logo from '../../img/footer/footer_logo.png';

function Footer(props) {
  const navItems = [
    'HOME',
    'ABOUT',
    'WORK',
    'SERVICES',
    'BLOG',
  ];

  return (
    <div className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__logo">
            <A  href={'#'} className='footer__logo_link'>
              <img src={logo} alt='logo' className='footer__logo_img'/>
            </A>
            <p className="footer__copyright">All Rights Reserved by Alecto</p>
          </div>
          <Nav
            items={navItems.map((item, index) => {
              return item[0].toUpperCase() + item.slice(1).toLowerCase();
            })}
            className='footer__nav'
            classNameLink='footer__nav_link'
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;