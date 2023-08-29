import './NotFound.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <Link className='not-found__link' to='/'>На главную</Link>
    </div>
  );
}
