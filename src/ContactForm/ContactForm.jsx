import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const initialValues = {
  contactName: "",
  contactNumber: "",
};

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  contactNumber: Yup.string()
    .matches(phoneRegExp, "The phone number must match the format 'xxx-xx-xx'")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.contactName,
      number: values.contactNumber,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field
              type="text"
              name="contactName"
              placeholder="James Bond"
            ></Field>
            <ErrorMessage
              className={css.errorText}
              name="contactName"
              component="span"
            ></ErrorMessage>
          </label>

          <label className={css.label}>
            <span>Number</span>
            <Field
              type="tel"
              name="contactNumber"
              placeholder="111-11-11"
            ></Field>
            <ErrorMessage
              className={css.errorText}
              name="contactNumber"
              component="span"
            ></ErrorMessage>
          </label>
          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
