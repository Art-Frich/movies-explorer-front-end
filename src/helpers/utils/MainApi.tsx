/* eslint-disable @typescript-eslint/lines-between-class-members */

import {
  inputEmailSettings, inputNameSettings, inputPasswordSettings, urlLocalMainApi,
} from '../constants';
import CheckJwtError from '../customErrors/CheckJwtError';

class MainApi {
  pathCreateUser: string;
  pathLoginUser: string;
  pathMe: string;
  pathLogout: string;
  nameKey: string;
  emailKey: string;
  passwordKey: string;
  pathFilms: string;

  constructor() {
    this.pathCreateUser = 'signup';
    this.pathLoginUser = 'signin';
    this.pathMe = 'users/me';
    this.pathLogout = 'signout';
    this.pathFilms = 'movies/';
    this.nameKey = inputNameSettings.name;
    this.emailKey = inputEmailSettings.name;
    this.passwordKey = inputPasswordSettings.name;
  }

  // eslint-disable-next-line class-methods-use-this
  handleFetch(fetch: Promise<Response>) {
    return fetch
      .then((res) => (res.ok ? res.json() : Promise.reject(res.json())));
  }

  checkJWT = () => fetch(urlLocalMainApi + this.pathMe, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((err: any) => {
      throw new CheckJwtError(err.status);
    });

  toRegisterUser = (values: any) => this.handleFetch(
    fetch(urlLocalMainApi + this.pathCreateUser, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: values[this.nameKey],
        email: values[this.emailKey],
        password: values[this.passwordKey],
      }),
    })
  );

  toLoginUser = (values: any) => this.handleFetch(
    fetch(urlLocalMainApi + this.pathLoginUser, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values[this.emailKey],
        password: values[this.passwordKey],
      }),
    })
  );

  toLogout() {
    return fetch(urlLocalMainApi + this.pathLogout, {
      method: 'POST',
      credentials: 'include',
    });
  }

  toUpdateUserData = (values: any) => fetch(urlLocalMainApi + this.pathMe, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: values[this.emailKey],
      name: values[this.nameKey],
    }),
  }).then(async (res) => (res.ok ? res.json() : Promise.reject(await res.json())));

  addMovie = (dataMovie: any) => this.handleFetch(
    fetch(urlLocalMainApi + this.pathFilms, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataMovie),
    })
  );

  deleteMovie = (movieId: any) => this.handleFetch(
    fetch(`${urlLocalMainApi + this.pathFilms + movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );

  getAllSavedMovies = () => this.handleFetch(
    fetch(urlLocalMainApi + this.pathFilms, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  );
}

const mainApi = new MainApi();
export default mainApi;
