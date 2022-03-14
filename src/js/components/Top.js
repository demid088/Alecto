import Container from '../elements/Container';
import TopSlider from '../elements/TopSlider';

import '../../css/Top.css';

function Top() {
  const slideItems = [
    {
      title: <h1 className='top__title'><span>Alecto</span> is simple PSD Template</h1>,
      subtitle: <p className='top__subtitle'>Nam varius accumsan elementum aliquam</p>,
      button: <button className='btn btn--outline'>Learn more</button>,
    },
    {
      title: <h1 className='top__title'>Alecto <span>is simple</span> PSD Template</h1>,
      subtitle: <p className='top__subtitle'>Nam varius accumsan elementum aliquam</p>,
      button: <button className='btn btn--outline'>Learn more</button>,
    },
    {
      title: <h1 className='top__title'>Alecto is simple <span>PSD Template</span></h1>,
      subtitle: <p className='top__subtitle'>Nam varius accumsan elementum aliquam</p>,
      button: <button className='btn btn--outline'>Learn more</button>,
    },
  ];

  return (
    <div className="top" id='home'>
      <Container>
        <div className="top__content">
          <TopSlider items={slideItems} />
          <a href="#about"><i className="fa-solid fa-angle-down" /></a>
        </div>
      </Container>
    </div>
  );
}

export default Top;