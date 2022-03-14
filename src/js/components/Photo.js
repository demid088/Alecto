import Container from '../elements/Container';

import '../../css/Photo.css';
import camera from '../../img/photo/camera.jpg';

function Photo(props) {
  return (
    <div className="photo" id='work'>
      <Container>
        <div className="photo__content">
          <img
            src={camera}
            alt='camera'
            className='photo__img'/>
          <div className="photo__content_info">
            <h2 className='photo__title'>Lorem ipsum</h2>
            <p className="photo__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien.
            </p>
            <button className="btn">Learn more</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Photo;