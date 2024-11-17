import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/HomePage'));
export const CollectionPage = lazy(() =>
  import('./CollectionPage/CollectionPage'),
);
export const FavoritePage = lazy(() => import('./FavoritePage/FavoritePage'));
export const GeneratorPage = lazy(() =>
  import('./GeneratorPage/GeneratorPage'),
);
export const LoginPage = lazy(() => import('./LoginPage/LoginPage'));
