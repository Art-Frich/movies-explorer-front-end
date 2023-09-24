import './SearchForm.css';

import React, { FormEvent, useRef } from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

interface ISearchForm {
  filters: Record<string, boolean>,
  setFilters: (newValue: Record<string, boolean>) => void,
  onSearch: (e: FormEvent<HTMLFormElement>, value: string) => void,
  onReset: () => void;
  userQuery: string,
  isSearch: boolean,

}

function SearchForm({
  filters, setFilters, onSearch, onReset, userQuery, isSearch,
}: ISearchForm) {
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <section className='sercher'>
      <form className='sercher__form' name='search-movie-form' onSubmit={(e) => onSearch(e, ref.current?.value || '')}>
        <input
          className='sercher__input input-reset input-focus'
          placeholder='Введите название фильма'
          name='name-movie'
          minLength={1}
          defaultValue={userQuery}
          ref={ref}
          required
        />
        <button
          type='submit'
          className='sercher__btn btn-reset btn-hover active-btn-effect color-btn-disabled'
          disabled={isSearch}
        >
          {isSearch ? 'Ищу...' : 'Поиск'}
        </button>
        <button
          type='button'
          className='sercher__btn btn-reset btn-hover active-btn-effect'
          onClick={() => {
            onReset();
            ref.current!.value = '';
          }}
        >
          Сброс
        </button>
      </form>
      <ul className='sercher__filter-list list-reset'>
        <li className='sercher__filter-list-element'>
          <FilterCheckbox content='Короткометражки' state={filters.isShort} setState={setFilters} name='isShort' />
        </li>
      </ul>
      <div className='sercher__dividing-line' />
    </section>
  );
}

export default SearchForm;
