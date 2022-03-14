import React from 'react';

import Container from '../elements/Container';
import OpinionsSlider from '../elements/OpinionsSlider';

import '../../css/Opinions.css';
import photo_1 from '../../img/opinions/photo_adam_czajkowski.png';

class Opinions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.sliderPrev = this.sliderPrev.bind(this);
    this.sliderNext = this.sliderNext.bind(this);
  }
  
  slideItems = [
    {
      photo: <img className="opinions__photo" src={photo_1} alt="Adam Czajkowski" />,
      title: <h3 className='opinions__title'><span>1. Alecto</span> lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>,
      subtitle: <p className='opinions__subtitle'>Adam Czajkowski<span>, CEO & Founder at symu.co</span></p>,
    },
    {
      photo: <img className="opinions__photo" src={photo_1} alt="Adam Czajkowski" />,
      title: <h3 className='opinions__title'><span>2. Alecto</span> lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>,
      subtitle: <p className='opinions__subtitle'>Adam Czajkowski<span>, CEO & Founder at symu.co</span></p>,
    },
    {
      photo: <img className="opinions__photo" src={photo_1} alt="Adam Czajkowski" />,
      title: <h3 className='opinions__title'><span>3. Alecto</span> lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>,
      subtitle: <p className='opinions__subtitle'>Adam Czajkowski<span>, CEO & Founder at symu.co</span></p>,
    },
    {
      photo: <img className="opinions__photo" src={photo_1} alt="Adam Czajkowski" />,
      title: <h3 className='opinions__title'><span>4. Alecto</span> lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>,
      subtitle: <p className='opinions__subtitle'>Adam Czajkowski<span>, CEO & Founder at symu.co</span></p>,
    },
    {
      photo: <img className="opinions__photo" src={photo_1} alt="Adam Czajkowski" />,
      title: <h3 className='opinions__title'><span>5. Alecto</span> lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>,
      subtitle: <p className='opinions__subtitle'>Adam Czajkowski<span>, CEO & Founder at symu.co</span></p>,
    },
  ];

  sliderPrev() {
    let count = this.state.count - 1;
    const length = this.slideItems.length;
    
    if (count < 0) count = length - 1;
    if (count > length - 1) count = 0;
    
    this.setState({
      count: count,
    });
  }

  sliderNext() {
    let count = this.state.count + 1;
    const length = this.slideItems.length;
    
    if (count < 0) count = length - 1;
    if (count > length - 1) count = 0;
    
    this.setState({
      count: count,
    });
  }

  render() {
    return (
      <div className="opinions">
        <Container>
          <div className="opinions__content">
            <i className="fa-solid fa-chevron-left" onClick={this.sliderPrev} />
            <OpinionsSlider items={this.slideItems} count={this.state.count} />
            <i className="fa-solid fa-chevron-right" onClick={this.sliderNext} />
          </div>
        </Container>
      </div>
    );
  }
}

export default Opinions;