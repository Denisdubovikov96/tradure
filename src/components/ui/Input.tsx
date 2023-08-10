/* eslint-disable react/display-name */
import classNames from 'classnames'
import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, label, error, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-1 pb-2 relative'>
        <label className='text-[#667974]' htmlFor={name}>{label}</label>
        <input
          ref={ref}
          type={type}
          className={classNames('px-4 py-2.5 border  border-[#C6DAD5] rounded-full', error && ' border-red-500')}
          name={name}
          {...props}
        />
        {error && (
          <p className='text-rose-500'>
            {error}
          </p>
        )}
      </div>
    );
  }
);


export default Input