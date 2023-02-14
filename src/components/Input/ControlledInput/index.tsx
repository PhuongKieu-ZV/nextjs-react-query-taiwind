import React, { memo } from 'react'
import { InputCustomProps } from '../type'
import UncontrollInput from '../UncontrollInput'

const ControlledInput = (props: InputCustomProps) => {
  const { name, label, errors } = props

  return (
    <>
      <UncontrollInput {...props} />
      {errors && errors[name]?.type === 'required' && (
        <p className="text-red-500">{label ? label : 'Field'} is required</p>
      )}
    </>
  )
}

export default memo(ControlledInput)
