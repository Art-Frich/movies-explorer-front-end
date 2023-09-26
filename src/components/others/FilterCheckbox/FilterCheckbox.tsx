import './FilterCheckbox.css';

import React from 'react';

interface IFilterCheckbox {
  content: string,
  state: boolean,
  setState: any,
  name: string,
}

export default function FilterCheckbox({
  content, state, setState, name,
}: IFilterCheckbox) {
  function changeCheckbox() {
    setState((prev: any) => ({ ...prev, [name]: !prev[name] }));
  }

  return (
    <div className='checkbox'>
      <label htmlFor={`filter-by-${content}`}>
        <input
          id={`filter-by-${content}`}
          className='checkbox__input'
          type='checkbox'
          checked={state}
          onChange={changeCheckbox}
        />
        <span className='checkbox__container' />
      </label>
      <span className='checkbox__signature'>{content}</span>
    </div>
  );
}
