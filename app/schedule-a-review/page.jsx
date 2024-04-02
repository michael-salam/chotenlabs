import FormContainer from "@/ui/ScheduleReviewForm/FormContainer";

import "./page.css";

const page = () => {
  return (
    <div className="large-bg min-h-[100vh] p-8 sm:p-16 grid grid-cols-12 gap-16 content-center">
      <h1 className="col-span-10 lg:col-span-4">
        Schedule a free website review
      </h1>
      <FormContainer />
    </div>
  );
};

export default page;
