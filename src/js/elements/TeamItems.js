function TeamItems(props) {
  const teamItems = props.arr.map((item, index) => {
    const fullName = item.name + ' ' + item.surname;
    return (
      <div className="team__item" key={index}>
        <img className="team__item_photo" src={item.photo} alt={fullName} />
        <div className="team__item_hover">
          <div className="team__item_name">
            {fullName}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="team__items">
      {teamItems}
    </div>
  );
}

export default TeamItems;