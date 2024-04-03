"use client";

import { useState } from "react";
import * as Yup from "yup";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

import "./schedule-review-form.css";

const stepOneValidationSchema = Yup.object({
  firstname: Yup.string().required("Your first name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  phone: Yup.string().required("Please provide a phone number"),
  websiteURL: Yup.string().required(
    "We need the URL of your website to review it"
  ),
});

const stepTwoValidationSchema = Yup.object({
  aboutBusiness: Yup.string().required("Please tell us about your business"),
});

const stepThreeValidationSchema = Yup.object({
  purposeOfWebsite: Yup.string().required(
    "Please tell us the purpose of your website"
  ),
});

const FormContainer = () => {
  const [data, setData] = useState({
    firstname: "",
    email: "",
    phone: "",
    websiteURL: "",
    aboutBusiness: "",
    purposeOfWebsite: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Form submitted!", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      stepOneValidationSchema={stepOneValidationSchema}
    />,
    <StepTwo
      next={handleNextStep}
      prev={handlePreviousStep}
      data={data}
      stepTwoValidationSchema={stepTwoValidationSchema}
    />,
    <StepThree
      next={handleNextStep}
      prev={handlePreviousStep}
      data={data}
      stepThreeValidationSchema={stepThreeValidationSchema}
    />,
    <StepFour />,
  ];

  return <div className="col-span-6 lg:col-span-4">{steps[currentStep]}</div>;
};

export default FormContainer;
