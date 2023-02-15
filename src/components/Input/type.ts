import { FieldErrors, UseFormRegister } from 'react-hook-form'

/* eslint-disable no-unused-vars */
export enum INPUT_TYPES {
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  PASSWORD = 'PASSWORD',
  CHECKBOX = 'CHECKBOX',
  RADIO_GROUP = 'RADIO_GROUP',
  SELECT = 'SELECT',
}

export interface IOptionCustom {
  label: string
  value: string
}

export type InputCustomProps = {
  inputType: INPUT_TYPES
  name: string
  register: UseFormRegister<any> // must have to listen input
  label?: string | JSX.Element | null
  customOptions?: IOptionCustom[]
  ref?: any
  errors?: FieldErrors<any> // must have if field is required
  placeholder?: string
  rows?: number
}
