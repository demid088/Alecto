import Container from '../elements/Container';

import '../../css/Mac.css';
import mac from '../../img/photo/macbook.jpg';

function Mac(props) {
  return (
    <div className="mac">
      <Container>
        <div className="mac__content">
          <div className="mac__content_info">
            <h2 className='mac__title'>Dolor sit amet</h2>
            <p className="mac__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum augue sed est porttitor, ac blandit nisl posuere. Pellentesque hendrerit suscipit mi eu lobortis. Curabitur consectetur enim id elementum accumsan. Quisque metus purus, iaculis id tincidunt non, blandit quis sapien.
            </p>
            <button className="btn">Learn more</button>
          </div>
          <img src={mac} alt='macbook' className='mac__img'/>
        </div>
      </Container>
    </div>
  );
}

export default Mac;