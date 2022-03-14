import Container from '../elements/Container';
import PricingItems from '../elements/PricingItems';

import '../../css/Pricing.css';

function Pricing(props) {
  const arrItems = [
    {
      price: '29',
    },
    {
      price: '39',
    },
    {
      price: '49',
    },
    {
      price: '109',
    },
  ]

  return (
    <div className="pricing" id='pricing'>
        <h2 className='pricing__title'>Pricing</h2>
        <i className="fa-solid fa-minus" />
        <p className='pricing__subtitle'>Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.</p>
      <Container>
        <PricingItems arr={arrItems} />
      </Container>
    </div>
  );
}

export default Pricing;