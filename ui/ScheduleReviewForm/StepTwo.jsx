import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "./TextError";

const StepTwo = ({ data, prev, next, stepTwoValidationSchema }) => {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepTwoValidationSchema}
    >
      {({ values }) => (
        <Form>
          <div className="mb-4 dark-bg-gradient p-8 rounded-2xl">
            <label htmlFor="aboutBusiness" className="mb-2">
              Tell us about your business
            </label>
            <Field
              className="w-full"
              as="textarea"
              name="aboutBusiness"
              id="aboutBusiness"
              required
            />
            <ErrorMessage name="aboutBusiness" component={TextError} />
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 bg-accent/10 rounded-full pl-6">
              <button type="button" onClick={() => prev(values)}>
                ← Back
              </button>
              <button type="submit" className="next-btn">
                Next →
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
