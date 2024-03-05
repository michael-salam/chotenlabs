import { Html, Heading, Text } from "@react-email/components";
const ReceiverConfirmation = ({ firstName, website }) => {
  return (
    <Html lang="en">
      <Text>Hi there {firstName}</Text>
      <Heading as="h1">
        Your free website review for {website} is on the way!
      </Heading>
      <Text>Reviews are typically delivered within 48 hours.</Text>
    </Html>
  );
};
export default ReceiverConfirmation;
