import { memo } from 'react'
import {
  CustomCheckbox,
  CustomInputPassword,
  CustomInputText,
  CustomRadioGroup,
  CustomSelect,
  CustomTextarea,
} from '../Inputs'
import { InputCustomProps, INPUT_TYPES } from '../type'

const UncontrollInput = (props: InputCustomProps) => {
  let Input:
    | null
    | typeof CustomInputText
    | typeof CustomInputPassword
    | typeof CustomTextarea
    | typeof CustomCheckbox
    | typeof CustomRadioGroup
    | typeof CustomSelect = null

  const { inputType } = props

  switch (inputType) {
    case INPUT_TYPES.TEXT:
      Input = CustomInputText
      break
    case INPUT_TYPES.PASSWORD:
      Input = CustomInputPassword
      break
    case INPUT_TYPES.TEXTAREA:
      Input = CustomTextarea
      break
    case INPUT_TYPES.CHECKBOX:
      Input = CustomCheckbox
      break
    case INPUT_TYPES.RADIO_GROUP:
      Input = CustomRadioGroup
      break
    case INPUT_TYPES.SELECT:
      Input = CustomSelect
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
