"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
export const sendEmail = async (data) => {
  const firstName = data.firstName;
  const email = data.emailAddress;
  const website = data.websiteAddress;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.batch.send([
      {
        from: "send@chotenlabs.com",
        to: [email],
        subject: "Request for Free Website Review",
        react: EmailTemplate({ firstName, website }),
      },
      {
        from: "send@chotenlabs.com",
        to: ["hello@chotenlabs.com"],
        subject: "Request for Free Website Review",
        react: EmailTemplate({ firstName, website }),
      },
    ]);
    return {
      success: true,
      message: "Your free website review is on its way!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred. Please try again.",
    };
  }
};
