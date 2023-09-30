import React from 'react'
import { useState } from 'react';

const SignupFormInput = (props) => {
    const { label, id, errorMessage,  onChange, ...inputProps } = props;
    const[focused , setFocused] = useState(false);

    const handleFocus = (e) =>{
        setFocused(true);
    }
    return (

        <div className='flex flex-col'>
            <label htmlFor={props.name} className='mt-4'>{label}: </label>
            <input id='signupInput' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={(e)=> inputProps.name=== "cPassword" && setFocused(true)} className= ' outline-none py-2 px-3 mt-1  text-sm rounded-md' />
            <span id='signupError' className='text-xs text-red-600'>{errorMessage}</span>
        </div>
    )
}

export default SignupFormInput