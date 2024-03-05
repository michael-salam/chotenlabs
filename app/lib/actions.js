"use server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
export const sendEmail = async (prevState, formData) => {
  const firstName = formData.get("firstName");
  const email = formData.get("email");
  const website = formData.get("website");
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
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: error.message,
      success: false,
    };
  }
};
