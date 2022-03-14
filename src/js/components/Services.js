import Container from '../elements/Container';
import ServicesItems from '../elements/ServicesItems';

import '../../css/Services.css';

function Services(props) {
  const arrItems = [
    {
      title: 'Portfolio',
      icon: <i className="fa-solid fa-briefcase" />,
    },
    {
      title: 'Design',
      icon: <i className="fa-solid fa-pencil" />,
    },
    {
      title: 'Branding',
      icon: <i className="fa-solid fa-clone" />,
    },
    {
      title: 'Development',
      icon: <i className="fa-solid fa-rocket" />,
    },
  ];

  return (
    <div className="services" id='services'>
      <Container>
        <div className="services__content">
          <h2 className='services__title'>Our Services</h2>
          <i className="fa-solid fa-minus"></i>
          <p className='services__subtitle'>Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.</p>
          <ServicesItems arr={arrItems} />
        </div>
      </Container>
    </div>
  );
}

export default Services;