import React from 'react';

class TopSlider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
    };

    this.itemsLength = this.props.items.length;
    this.slider = '';
  }

  createSlider() {
    let slider = '';
    let sliderDots = [];
    
    let title = '';
    let subtitle = '';
    let button = '';

    if (this.itemsLength < 1) {
      throw new Error('Нет элементов для TopSlider!');
    }

    for (let index = 0; index < this.itemsLength; index++) {
      const item = this.props.items[index];
      
      if (index === this.state.count) {
        sliderDots.push(
          <div className='slider__dot active' key={index} />
        );

        title = item.title;
        subtitle = item.subtitle;
        button = item.button;

      } else {
        sliderDots.push(
          <div className='slider__dot' key={index} />
        );
      }
    }
      
    slider = (
      <div className="top__content_center">
        {title}
        {subtitle}
        {button}
        <div className='slider'>
          {sliderDots}
        </div>
      </div>
    )

    return slider;
  }
  
  changeSlider(next) {
    let nextCount = next ? this.state.count + 1 : this.state.count - 1;

    if (nextCount < 0) {
      nextCount = this.itemsLength - 1;
    }

    if (nextCount >= this.itemsLength) {
      nextCount = 0;
    }

    this.setState({
      count: nextCount,
    });
  }

  render() {
    this.slider = this.createSlider();
    
    return (
      <div className="top__content_main">
        <i className="fa-solid fa-chevron-left" onClick={() => this.changeSlider(false)} />
        {this.slider}
        <i className="fa-solid fa-chevron-right" onClick={() => this.changeSlider(true)} />
      </div>
    );
  }
}

export default TopSlider;