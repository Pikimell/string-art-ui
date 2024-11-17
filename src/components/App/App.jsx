import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  CollectionPage,
  FavoritePage,
  GeneratorPage,
  LoginPage,
} from '../../pages/pages';

const App = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<CollectionPage />} path="/collections" />
      <Route element={<FavoritePage />} path="/favorites" />
      <Route element={<GeneratorPage />} path="/generator" />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export default App;
