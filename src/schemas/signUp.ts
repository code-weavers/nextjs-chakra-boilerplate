import yup from './index';

export const signUpSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required(),
  cellphone: yup.string().required(),
});
