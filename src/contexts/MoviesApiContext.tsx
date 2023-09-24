import React, {
  useCallback, useState, useContext, useMemo, createContext, ReactNode,
} from 'react';
import mainApi from '../helpers/utils/MainApi';
import { parseMovieData } from '../helpers/utils/utils';
import moviesApi from '../helpers/utils/MoviesApi';

interface IMoviesApiContext {
  allFilms: any,
  savedFilms: any,
  setSavedFilms: (newVal: any) => void,
  getSavedFilms: () => void,
  getAllFilms: () => void,
}

interface IReactChildren {
  children: ReactNode
}

const MoviesApiContext = createContext<IMoviesApiContext | undefined>(undefined);

export const useMoviesApiContext = () => useContext(MoviesApiContext);

export function MoviesApiProvider({ children }: IReactChildren) {
  const [allFilms, setAllFilms] = useState<any>([]);
  const [savedFilms, setSavedFilms] = useState<any>([]);

  const funcSetAllFilms = (allFilmsData: any) => {
    if (allFilms.length === 0) {
      setAllFilms(allFilmsData
        .map((film: any) => {
          const parsedFilm = parseMovieData(film);
          return { ...parsedFilm };
        }));
    }
  };

  const getSavedFilms = useCallback(async () => {
    if (savedFilms.length === 0) {
      const filmsData = (await mainApi.getAllSavedMovies()).data;
      setSavedFilms(filmsData);
    }
  }, [savedFilms]);

  const getAllFilms = useCallback(async () => {
    if (savedFilms.length === 0) {
      const savedFilmsData = (await mainApi.getAllSavedMovies()).data;
      const allFilmsData = await moviesApi.getMovies();
      setSavedFilms(savedFilmsData);
      funcSetAllFilms(allFilmsData);
    } else if (allFilms.length === 0) {
      const allFilmsData = await moviesApi.getMovies();
      funcSetAllFilms(allFilmsData);
    }
  }, [savedFilms]);

  const contextValue = useMemo(() => ({
    allFilms, setSavedFilms, savedFilms, getSavedFilms, getAllFilms,
  }), [allFilms, savedFilms]);

  return (
    <MoviesApiContext.Provider value={contextValue}>
      {children}
    </MoviesApiContext.Provider>
  );
}
