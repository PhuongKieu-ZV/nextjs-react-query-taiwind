import React, { memo } from 'react'
import { InputCustomProps } from '../../type'

type IProps = InputCustomProps

const CustomCheckbox: React.FC<IProps> = (props) => {
  const { name, label, register } = props

  return (
    <>
      <input
        {...register(name)}
        id={name}
        name={name}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      {label && (
        <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
          {label}
        </label>
      )}
    </>
  )
}

export default memo(CustomCheckbox)
