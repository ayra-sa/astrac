// import { useState } from 'react';
import './form.css'

export const FormInput = (props) => {

  const { label, id, type, name = 'text' } = props
  // const { value } = props

  return (
      <div className="formInput">
        <label htmlFor={label}>
          {label}<span className="star">*</span>
        </label>
        <input type={type} id={id} name={name} className='input' autoComplete='off' />
      </div>
  );
};
