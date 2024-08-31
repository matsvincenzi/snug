import * as yup from 'yup'

const formValidation = yup.object().shape({
  username: yup
    .string()
    .max(30, "You've exceeded the number of characters.")
    .min(3, 'At least 3 characters are required.')
    .required('The User field is mandatory'),
  email: yup
    .string()
    .max(100, "You've exceeded the character limit")
    .email('Enter a valid e-mail address.')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Invalid e-mail format, check the data.',
    )
    .required('The E-mail field is mandatory'),
  password: yup
    .string()
    .max(100, "You've exceeded the character limit")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'The password must have at least 6 characters, including an uppercase letter, a lowercase letter and a number.',
    )
    .required('The Password field is mandatory'),
})

export default formValidation
