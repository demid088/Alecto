import Container from '../elements/Container';
import AboutItems from '../elements/AboutItems';

import '../../css/About.css';

function About(props) {
  const arrIcons = [
    <i className="fa-solid fa-rocket" />,
    <i className="fa-solid fa-atom" />,
    <i className="fa-solid fa-chart-line" />,
    <i className="fa-solid fa-graduation-cap" />,
  ];

  return (
    <div className="about" id='about'>
      <Container>
        <div className="about__content">
          <h2 className='about__title'>About us</h2>
          <i className="fa-solid fa-minus"></i>
          <p className='about__subtitle'>Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.</p>
          <AboutItems arr={arrIcons} />
          <button className='btn'>Learn more</button>
        </div>
      </Container>
    </div>
  );
}

export default About;