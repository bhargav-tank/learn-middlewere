import React from 'react';
import { useFormik } from 'formik';
import InputForm from './Input';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.pass) {
    errors.email = 'Required';
  } else if (values.pass?.length > 8) {
    errors.pass = 'Must be 8 characters.';
  }

  return errors;
};

export const LearnFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      pass: ''
    },
    validate,
    onSubmit: values => {
      console.log(values);
      alert(JSON.stringify(values, null, 5000));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputForm
        type='text'
        label='First Name'
        name='firstName'
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <InputForm
        name="lastName"
        label='Last Name'
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName} />
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}


      <InputForm
        name="email"
        type="email"
        label='Email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <InputForm
        name="pass"
        type="password"
        label='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pass}
      />
      {formik.errors.pass ? <div>{formik.errors.pass}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};