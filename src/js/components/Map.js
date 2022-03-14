import Container from '../elements/Container';

import '../../css/Map.css';
import map from '../../img/map/map.png';

function Map(props) {
  return (
    <div className="map">
      <Container>
        <div className="map__content">
          <div className="map__content_info">
            <h2 className='map__title'>Dolor sit amet</h2>
            <p className="map__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien.
            </p>
            <button className="btn">Learn more</button>
          </div>
          <div className="map__content_map">
            <img src={map} alt='map' className='map__img'/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Map;