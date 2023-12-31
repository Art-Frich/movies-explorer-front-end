import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/common/App/App';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { ErrorPopupProvider } from './contexts/ErrorPopupContext';
import { MoviesApiProvider } from './contexts/MoviesApiContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ErrorPopupProvider>
      <CurrentUserProvider>
        <MoviesApiProvider>
          <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </MoviesApiProvider>
      </CurrentUserProvider>
    </ErrorPopupProvider>
  );
}
