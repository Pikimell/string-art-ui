import { NavLink } from 'react-router-dom';
import style from './Link.module.css';

const getClass = ({ isActive }) => {
  let result = style.link + ' ';
  result += isActive ? style.active : '';
  return result;
};

const Link = ({ children, to }) => {
  return (
    <NavLink className={getClass} to={to}>
      {children}
    </NavLink>
  );
};

export default Link;
