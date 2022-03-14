import React from 'react';

class OpinionsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.count = this.props.count;
  }
  
  checkCount() {
    if (this.props.count < 0)
      this.props.count = 0;
    if (this.props.count > this.props.items.length - 1)
      this.props.count = this.props.items.length - 1;

    this.count = this.props.count;
  }

  createSlide(item, index) {
    let className = 'opinions__content_center';
    
    if (index !== this.count) {
      className += ' hide';
    }
    
    return (
      <div className={className} key={index}>
        {item.photo}
        {item.title}
        {item.subtitle}
      </div>
    );
  }

  render() {
    const items = this.props.items;
    const itemsLength = this.props.items.length;
    let sliderDot = [];
    let slider = [];
    
    this.checkCount();

    for (let index = 0; index < itemsLength; index++) {
      if (index === this.count) {
        sliderDot.push(<div className='slider__dot active' key={index} />);
        continue;
      }
      sliderDot.push(<div className='slider__dot' key={index} />);
    }

    slider = items.map((item, index) => this.createSlide(item, index));

    const result = <div className="opinions__content_slider">
      {[
      <div className='opinions__content_box' key={'opinions__content_box'}>{slider}</div>,
      <div className='slider slider__opinions' key={'slider'}>{sliderDot}</div>
      ]}
    </div>;

    return result;
  }
}

export default OpinionsSlider;