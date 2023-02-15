import React, { memo } from 'react'
import { InputCustomProps } from '../../type'

type IProps = InputCustomProps

const CustomInputPassword: React.FC<IProps> = (props) => {
  const { name, label, register, placeholder = '' } = props

  return (
    <>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <input
        type={'password'}
        id={name}
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        {...register(name)}
        name={name}
        placeholder={placeholder}
      />
    </>
  )
}

export default memo(CustomInputPassword)
