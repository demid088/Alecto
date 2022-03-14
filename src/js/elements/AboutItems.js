function AboutItems(props) {
  const aboutItems = props.arr.map((item, index) => {
    return (
      <div className="about__item" key={index}>
        <div className="about__item_circle">
          {item}
        </div>
        <h3 className='about__item_title'>Lorem ipsum</h3>
        <p className="about__item_text">
          Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.
        </p>
      </div>
    );
  });

  return (
    <div className="about__items">
      {aboutItems}
    </div>
  );
}

export default AboutItems;