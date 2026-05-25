// import { useState } from "react";
// export default function Form() {
//     let [fullName, setFullName] = useState("shradha");
//     let handleNameChange = (event) => {
//         setFullName(event.target.value);
//     };
//      let handleSubmit = (event) => {
//     event.preventDefault(); // prevents page reload
//     alert(`Submitted name: ${fullName}`); // or send data to backend
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//         <input
//          placeholder="enter full name"
//          type="text"
//          value={fullName}
//          onChange={handleNameChange}
//          />
//          <button>Submit</button>
//     </form>
//   );
// }

//Form by using Fomik and Yup
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  //Define validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  //set initial values for form fields
  const initialValues = {
    email: "",
    password: "",
  };

  //Handle form submission
  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    resetForm(); // Reset form after submission
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Login Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form style={{ display: "inline-block", textAlign: "left" }}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            {/* 5. Cleanly placed Field and ErrorMessage elements */}
            <Field type="email" id="email" name="email" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="email" />
            </div>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block" }}>
              Password
            </label>
            <Field type="password" id="password" name="password" />
            <div style={{ color: "red" }}>
              <ErrorMessage name="password" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
