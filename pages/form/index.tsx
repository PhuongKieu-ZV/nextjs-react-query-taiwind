import ControlledInput from '@/src/components/Input/ControlledInput'
import { INPUT_TYPES } from '@/src/components/Input/type'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IForm {
  firstName: string
  password: string
  model: string
  country: string
  description?: string
  isRemember?: boolean
}

const initialValueForm: IForm = {
  firstName: '',
  password: '',
  model: '1',
  country: '',
  description: '',
  isRemember: false,
}

const schema = yup.object({
  firstName: yup.string().required('Field is required'),
  password: yup.string().required('Field is required'),
  model: yup.string().required('Field is required'),
  country: yup.string().required('Field is required'),
})

const FormDemo = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { ...initialValueForm },
  })

  const onSubmit = (data: IForm) => {
    console.log(data)
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <ControlledInput
                  inputType={INPUT_TYPES.TEXT}
                  label={'First Name'}
                  register={register}
                  name="firstName"
                  errors={errors}
                  placeholder={'First name'}
                />
              </div>
              <div>
                <ControlledInput
                  inputType={INPUT_TYPES.PASSWORD}
                  label={'Password'}
                  register={register}
                  name="password"
                  errors={errors}
                  placeholder="Password"
                />
              </div>
              <div>
                <ControlledInput
                  inputType={INPUT_TYPES.TEXTAREA}
                  label={'Description'}
                  register={register}
                  name="description"
                  placeholder="Description"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ControlledInput
                  inputType={INPUT_TYPES.CHECKBOX}
                  label={'Remember me'}
                  register={register}
                  name="isRemember"
                />
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <ControlledInput
                inputType={INPUT_TYPES.RADIO_GROUP}
                register={register}
                name="model"
                customOptions={[
                  { label: 'Model 1', value: '1' },
                  { label: 'Model 2', value: '2' },
                ]}
                errors={errors}
              />
            </div>
            <div className="flex items-center justify-between">
              <ControlledInput
                inputType={INPUT_TYPES.SELECT}
                register={register}
                name="country"
                customOptions={[
                  { label: 'Viet Name', value: 'VN' },
                  { label: 'Singapore', value: 'SG' },
                ]}
                errors={errors}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormDemo
