import React, { memo } from 'react'
import { InputCustomProps } from '../../type'

type IProps = InputCustomProps

const CustomTextarea: React.FC<IProps> = (props) => {
  const { name, label, register, placeholder = '', rows = 3 } = props

  return (
    <>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <textarea
        id={name}
        rows={rows}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
        {...register(name)}
        name={name}
      />
    </>
  )
}

export default memo(CustomTextarea)
