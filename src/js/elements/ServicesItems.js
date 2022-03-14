function ServicesItems(props) {
  const servicesItems = props.arr.map((item, index) => {
    return (
      <div className="services__item" key={index}>
        <div className="services__item_circle">
          {item.icon}
        </div>
        <h3 className='services__item_title'>{item.title}</h3>
        <p className="services__item_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere.
        </p>
      </div>
    );
  });

  return (
    <div className="services__items">
      {servicesItems}
    </div>
  );
}

export default ServicesItems;