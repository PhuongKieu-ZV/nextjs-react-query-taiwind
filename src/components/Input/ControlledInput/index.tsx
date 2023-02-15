import React from 'react'
import { InputCustomProps } from '../type'
import UncontrollInput from '../UncontrollInput'

const ControlledInput = (props: InputCustomProps) => {
  const { name, errors } = props

  const errorMessage =
    errors && errors[name] ? (errors[name] as any)?.message : ''

  return (
    <>
      <UncontrollInput {...props} />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </>
  )
}

export default ControlledInput
