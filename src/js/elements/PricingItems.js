function PricingItems(props) {
  const pricingItems = props.arr.map((item, index) => {
    const fullPrice = '$' + item.price;
    return (
      <div className="pricing__item" key={index}>
        <div className="pricing__container">
          <h3 className='pricing__price'>{fullPrice}</h3>
          <p className="pricing__license">Lorem ipsum license</p>
        </div>
        <div className="pricing__hr"></div>
        <div className="pricing__container">
          <p className="pricing__description">Lorem ipsum dolor sit amet consectetur dipiscing elit Ante sed interdum labortis Est nisi efficitur lactus</p>
        </div>
        <div className="pricing__purchase">
          <p className="pricing__purchase_text">PURCHASE</p>
          <i className="fa-solid fa-cart-shopping" />
        </div>
      </div>
    );
  });

  return (
    <div className="pricing__items">
      {pricingItems}
    </div>
  );
}

export default PricingItems;