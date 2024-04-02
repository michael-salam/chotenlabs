import { ErrorMessage, Field, Form, Formik } from "formik";
import TextError from "./TextError";

const StepOne = ({ data, next, stepOneValidationSchema }) => {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepOneValidationSchema}
    >
      <Form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 dark-bg-gradient p-8 rounded-2xl">
          <div>
            <label htmlFor="firstname" className="mb-2">
              First name
            </label>
            <Field
              className="w-full col-span-1"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="e.g. John"
              required
            />
            <ErrorMessage name="firstname" component={TextError} />
          </div>

          <div>
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <Field
              className="w-full col-span-1"
              type="email"
              name="email"
              id="email"
              placeholder="e.g. john@gmail.com"
              required
            />
            <ErrorMessage name="email" component={TextError} />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2">
              Phone
            </label>
            <Field
              className="w-full col-span-1"
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g. (555) 555-1234"
              required
            />
            <ErrorMessage name="phone" component={TextError} />
          </div>

          <div>
            <label htmlFor="websiteURL" className="mb-2">
              Website URL
            </label>
            <Field
              className="w-full col-span-1"
              type="text"
              name="websiteURL"
              id="websiteURL"
              placeholder="e.g. https://www.website.com"
              required
            />
            <ErrorMessage name="websiteURL" component={TextError} />
          </div>
        </div>
        <button type="submit" className="block ml-auto next-btn">
          Next
        </button>
      </Form>
    </Formik>
  );
};

export default StepOne;
