import { Html, Heading, Text, Link } from "@react-email/components";
const SenderConfirmation = ({ firstName, website, email }) => {
  return (
    <Html lang="en">
      <Heading as="h1">
        A new request for a free review has been sent by {email}
      </Heading>
      <Text>Name: {firstName}</Text>
      <Text>Website for review:</Text>
      <Link href={website}>{website}</Link>
    </Html>
  );
};
export default SenderConfirmation;
