"use server";
import ReceiverConfirmation from "@/templates/ReceiverConfirmation";
import SenderConfirmation from "@/templates/SenderConfirmation";
import { Resend } from "resend";
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
        subject: "You Have Requested Free Website Review",
        react: ReceiverConfirmation({ firstName, website }),
      },
      {
        from: "send@chotenlabs.com",
        to: ["hello@chotenlabs.com"],
        subject: "New Request for Free Website Review",
        react: SenderConfirmation({ firstName, website, email }),
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
