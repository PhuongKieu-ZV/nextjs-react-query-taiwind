import { memo } from 'react'
import { CustomInputText } from '../Inputs'
import { InputCustomProps, INPUT_TYPES } from '../type'

const UncontrollInput = (props: InputCustomProps) => {
  let Input: null | typeof CustomInputText = null

  const { inputType } = props

  switch (inputType) {
    case INPUT_TYPES.TEXT:
      Input = CustomInputText
      break

    default:
      break
  }

  if (Input !== null) {
    return (
      <>
        <Input {...props} />
      </>
    )
  }
  return null
}

export default memo(UncontrollInput)
