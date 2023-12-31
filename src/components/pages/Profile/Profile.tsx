import './Profile.css';

import React from 'react';

import { useCurrentUser } from '../../../contexts/CurrentUserContext';
import SbtBtnOfUserData from '../../others/SbtBtnOfUserData/SbtBtnOfUserData';
import InputsOfUserData from '../../others/InputsOfUserData/InputsOfUserData';
import { IdataUser } from '../../../helpers/InterfacesOfDataUser';
import { IobjValStr } from '../../../helpers/InterfacesOthers';
import { IHandleChangeInput, IhandleSubmit } from '../../../сustomHooks/useForm';

interface IProfile {
  onSubmit: ({ e }: IhandleSubmit) => Promise<void>;
  onInput: ({ e, typeInput, aboutPattern }: IHandleChangeInput) => void;
  onLogout: () => void;
  onEditBtnClick: () => void;

  fetchCondition: boolean;
  isDisabledInput: boolean;
  submitMsg: string;
  resData: IdataUser | null;
  errorsInput: IobjValStr;
  isDisabledSubmitBtn: boolean;
  valuesInput: IobjValStr;
}

export default function Profile({
  onSubmit, fetchCondition, onLogout, onEditBtnClick, isDisabledInput,
  submitMsg, resData, errorsInput, onInput, isDisabledSubmitBtn,
  valuesInput,
}: IProfile) {
  const curUser = useCurrentUser();
  return (
    <main className='page-profile'>
      <form
        className='page-profile__form'
        name='change-user-data-form'
        onSubmit={(e) => onSubmit({ e })}
        autoComplete='off'
      >
        <div className='page-profile__content'>
          <h1 className='page-profile__title'>{`Здравствуйте, ${curUser.name} :)`}</h1>

          <InputsOfUserData
            inputTypes={{ inputTypeName: true, inputTypeEmail: true }}
            inputDisabled={isDisabledInput || fetchCondition}
            errors={errorsInput}
            values={valuesInput}
            handleChangeInput={onInput}
            isProfile
          />
        </div>

        <div className='page-profile__btns'>
          <span className={`page-profile__submit-result-msg ${resData === null
            ? 'page-profile__submit-result-msg_err'
            : 'page-profile__submit-result-msg_ok'}`}
          >
            {submitMsg}
          </span>
          {isDisabledInput && (
            <>
              <button
                className='page-profile__btn-edit btn-reset btn-hover active-underline color-text-disabled'
                type='button'
                name='btn-change-user-data-form'
                onClick={onEditBtnClick}
                disabled={fetchCondition}
              >
                Редактировать
              </button>
              <button
                className='page-profile__btn-logout btn-reset btn-hover active-underline color-text-disabled'
                type='button'
                onClick={onLogout}
                disabled={fetchCondition}
              >
                Выйти из аккаунта
              </button>
            </>
          )}

          {!isDisabledInput ? (
            <SbtBtnOfUserData
              isFetching={fetchCondition}
              isDisable={isDisabledSubmitBtn}
              btnText='Сохранить'
            />
          ) : null}
        </div>
      </form>

    </main>
  );
}
