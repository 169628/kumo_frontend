import * as yup from 'yup'

export const schema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(2, 'Must be at least 2 characters')
    .max(15, 'Maximum 10 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Must be at least 2 characters')
    .max(12, 'Maximum 10 characters'),
})
