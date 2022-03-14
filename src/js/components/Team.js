import TeamItems from '../elements/TeamItems';

import '../../css/Team.css';

import photo_1 from '../../img/team/team_1.jpg';
import photo_2 from '../../img/team/team_2.jpg';
import photo_3 from '../../img/team/team_3.jpg';
import photo_4 from '../../img/team/team_4.jpg';
import photo_5 from '../../img/team/team_5.jpg';
import photo_6 from '../../img/team/team_6.jpg';
import photo_7 from '../../img/team/team_7.jpg';
import photo_8 from '../../img/team/team_8.jpg';
import photo_9 from '../../img/team/team_9.jpg';
import photo_10 from '../../img/team/team_10.jpg';

function Team(props) {
  const arrItems = [
    {
      name: 'John',
      surname: 'Doe',
      photo: photo_1,
    },
    {
      name: 'James',
      surname: 'Baker',
      photo: photo_2,
    },
    {
      name: 'Miranda',
      surname: 'Miller',
      photo: photo_3,
    },
    {
      name: 'Bryden',
      surname: 'Hall',
      photo: photo_4,
    },
    {
      name: 'Abby',
      surname: 'Black',
      photo: photo_5,
    },
    {
      name: 'Dominique',
      surname: 'Dodson',
      photo: photo_6,
    },
    {
      name: 'Delia',
      surname: 'Albertson',
      photo: photo_7,
    },
    {
      name: 'Blak',
      surname: 'Gate',
      photo: photo_8,
    },
    {
      name: 'Candice',
      surname: 'Bawerman',
      photo: photo_9,
    },
    {
      name: 'Brenda',
      surname: 'Gibbs',
      photo: photo_10,
    },
  ];

  return (
    <div className="team" id='team'>
      <h2 className='team__title'>Meet our team</h2>
      <i className="fa-solid fa-minus"></i>
      <p className='team__subtitle'>Nam varius accumsan elementum. Aliquam fermentum eros in suscipit scelerisque.</p>
      <TeamItems arr={arrItems} />
    </div>
  );
}

export default Team;