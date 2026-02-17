import * as yup from 'yup'

export const schema = yup.object({
  brand: yup.string().required('Brand is required'),
  model: yup.string().required('Model is required'),
  sv: yup
    .string()
    .required('Model is required')
    .min(2, 'Version number must be at least 2 digits')
    .max(10, 'Version number maximum 10 digits'),
  tv: yup
    .string()
    .required('Model is required')
    .min(2, 'Version number must be at least 2 digits')
    .max(10, 'Version number maximum 10 digits'),
  file: yup.mixed().required(),
})
