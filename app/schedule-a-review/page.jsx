import FormContainer from "@/ui/ScheduleReviewForm/FormContainer";

import "./page.css";

const page = () => {
  return (
    <div className="large-bg min-h-[100vh] px-2 pt-8 md:pt-16 sm:px-16 grid grid-cols-6 gap-8 lg:gap-16 content-center">
      <h1 className="col-span-6 lg:col-span-2">
        Schedule a free website review
      </h1>
      <FormContainer />
    </div>
  );
};

export default page;
