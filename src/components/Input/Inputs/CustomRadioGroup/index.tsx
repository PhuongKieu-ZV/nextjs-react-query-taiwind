import React, { memo } from 'react'
import { InputCustomProps, IOptionCustom } from '../../type'

type IProps = InputCustomProps

const CustomRadioGroup: React.FC<IProps> = (props) => {
  const { name, register, customOptions } = props

  return (
    <>
      {(customOptions || []).map((option: IOptionCustom) => {
        return (
          <div className="flex items-center" key={option.value}>
            <input
              id={option.value}
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              value={option.value}
              {...register(name)}
              name={name}
            />
            <label
              htmlFor={option.value}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {option.label}
            </label>
          </div>
        )
      })}
    </>
  )
}

export default memo(CustomRadioGroup)
