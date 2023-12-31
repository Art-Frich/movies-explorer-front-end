import React from 'react';
import { IobjValStr } from '../../../helpers/InterfacesOthers';

interface IInputBlock {
  labelClass: string,
  titleSpanClass: string,
  titleSpanContent: string,
  inputClass: string,
  errSpanClass: string,
  inputSettings: IInputSettings,
  values: IobjValStr,
  errors: IobjValStr,
  onInput: (data: {
    e: React.ChangeEvent<HTMLInputElement>,
    typeInput: string,
    aboutPattern: string,
  }) => void,
  inputDisabled?: boolean,
}

interface IInputSettings {
  id: string,
  name: string,
  placeholder: string,
  type: string,
  pattern: string,
  title: string,

}

export default function InputBlock({
  labelClass, titleSpanClass, titleSpanContent, inputClass,
  errSpanClass, inputSettings, values, errors, onInput, inputDisabled,
}: IInputBlock) {
  const {
    id, name, placeholder, type, pattern, title,
  } = inputSettings;

  return (
    <label className={labelClass} htmlFor={id}>
      <span className={titleSpanClass}>{titleSpanContent}</span>
      <input
        className={`${inputClass} input-reset input-focus input-hover input-disabled`}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        pattern={pattern}
        title={title}
        required
        value={values[name] || ''}
        onChange={(e) => onInput({ e, typeInput: type, aboutPattern: title })}
        disabled={inputDisabled}
      />
      <span className={errSpanClass}>{errors[name]}</span>
    </label>
  );
}

InputBlock.defaultProps = {
  inputDisabled: false,
};
