import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDirectoryPath } from 'redux/selectors';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

const NavBar = () => {
  const [isPathVisible, setPathVisible] = useState(false);
  const directoryPath = useSelector(selectDirectoryPath);  
  useEffect(() => {
    directoryPath > 0 ? setPathVisible(true) : setPathVisible(false);
  }, [directoryPath]);

  return (
    <ul style={{ display: 'flex' }}>
      <li>
      <Link to="/">{'Iнтернет-магазин Electro world > '}</Link>
      </li>
      {isPathVisible &&
        directoryPath.map(item => (
          <li>
            {item.cat_name} {' >'}{' '}
          </li>
        ))}
    </ul>
  );
};

export default NavBar;
