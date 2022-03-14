import A from '../elements/A'

function Nav(props) {
  const items = props.items;

  const links = items.map((item, index) => {
    return <A href={'#' + item.toLowerCase()}
              className={props.classNameLink}
              key={index} >
                {item}
            </A>
  });

  return (
    <nav className={props.className}>
      {links}
    </nav>
  );
}

export default Nav;