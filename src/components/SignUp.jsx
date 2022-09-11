import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./Login.css";
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Please enter your first name"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a vaild email"
        ),
      password: Yup.string().required("Required"),
      confirmedPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password must match"),
      phone: Yup.string()
        .required("Required")
        .matches(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          "Must be a valid phone number"
        ),
    }),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  // console.log(formik.errors.confirmedPassword);

  return (
    <section>
      <form className="infoform" onSubmit={formik.handleSubmit}>
        <label> Your Name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name}</p>
        )}
        <label> Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
        />
        <label> PassWord </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        <label> Confirmed Password </label>
        <input
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
          placeholder="Enter your password"
        />
        {formik.errors.confirmedPassword && (
          <p className="errorMsg"> {formik.errors.confirmedPassword}</p>
        )}
        <label> Phone number </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone number"
        />
        {formik.errors.phone && (
          <p className="errorMsg"> {formik.errors.phone}</p>
        )}
        <button type="submit"> Continue</button>
      </form>
    </section>
  );
};

export default LoginForm;
