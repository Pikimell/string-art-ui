import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';
import { useState } from 'react';

const Header = ({}) => {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
};

export default Header;
