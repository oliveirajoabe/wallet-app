import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required('Campo de e-mail obrigatorio'),
    password: yup.string().required('Campo de senha obrigatorio'),
  })
  .required('Insira valores em todos os campos');

export default schema;
