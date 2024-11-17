import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';
import { useState } from 'react';

const Header = ({}) => {
  return (
    <header>
      <h1>String Art</h1>
      <Navigation />
    </header>
  );
};

export default Header;
