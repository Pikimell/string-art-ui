import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  CollectionPage,
  FavoritePage,
  GeneratorPage,
  LoginPage,
} from '../../pages/pages';
import Layout from '../Layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CollectionPage />} path="/collections" />
        <Route element={<FavoritePage />} path="/favorites" />
        <Route element={<GeneratorPage />} path="/generator" />
        <Route element={<LoginPage />} path="/login" />

        <Route element={<HomePage />} path="*" />
      </Routes>
    </Layout>
  );
};

export default App;
