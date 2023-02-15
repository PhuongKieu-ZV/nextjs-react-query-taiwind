import React, { memo } from 'react'
import { InputCustomProps, IOptionCustom } from '../../type'

type IProps = InputCustomProps

const CustomSelect: React.FC<IProps> = (props) => {
  const { name, register, customOptions, label } = props

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        {...register(name)}
        name={name}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {(customOptions || []).map((option: IOptionCustom) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default memo(CustomSelect)
