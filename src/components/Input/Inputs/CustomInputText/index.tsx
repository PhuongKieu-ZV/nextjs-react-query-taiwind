import React, { memo } from 'react'
import { InputCustomProps } from '../../type'

type IProps = InputCustomProps

const CustomInputText: React.FC<IProps> = (props) => {
  const { name, label, register, patternValidate } = props
  return (
    <>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      {register && patternValidate ? (
        <input
          type={'text'}
          id={name}
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          {...register(name, {
            ...patternValidate,
          })}
          name={name}
        />
      ) : (
        <input
          type={'text'}
          id={name}
          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          name={name}
        />
      )}
    </>
  )
}

export default memo(CustomInputText)
