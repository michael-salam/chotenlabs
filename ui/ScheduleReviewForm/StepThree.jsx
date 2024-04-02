import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "./TextError";

const StepThree = ({ data, prev, next, stepThreeValidationSchema }) => {
  const handleSubmit = (values) => {
    next(values, true);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepThreeValidationSchema}
    >
      {({ values }) => (
        <Form>
          <div className="mb-4 dark-bg-gradient p-8 rounded-2xl">
            <label htmlFor="purposeOfWebsite" className="mb-2">
              What purpose do you want your website to serve?
            </label>
            <Field
              className="w-full"
              as="textarea"
              name="purposeOfWebsite"
              id="purposeOfWebsite"
              required
            />
            <ErrorMessage name="purposeOfWebsite" component={TextError} />
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 bg-accent/10 rounded-full pl-6">
              <button type="button" onClick={() => prev(values)}>
                ← Back
              </button>
              <button type="submit" className="btn-accent px-8 py-3">
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
