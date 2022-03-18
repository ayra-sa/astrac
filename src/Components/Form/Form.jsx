// import { useState } from 'react';
import './form.css'

export const FormInput = (props) => {

  const { label, id, type = 'text' } = props

  // const [value, setValue] = useState('')
  // const onChange = e => {
  //   setValue(e.target.value)
  // }
  return (
      <div className="formInput">
        <label htmlFor={label}>
          {label}<span className="star">*</span>
        </label>
        <input type={type} id={id} className='input' autoComplete='off' />
      </div>
  );
};
