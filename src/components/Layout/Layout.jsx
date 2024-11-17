import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Suspense } from 'react';
import Loader from '../customComponents/Loader/Loader';
import style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Suspense loading={<Loader />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
