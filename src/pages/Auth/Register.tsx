import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import RegisterForm from "../../components/register/RegisterForm";
const Register = () => {
  return (
    <Card w={500}>
      <CardHeader>
        <Center>
          <Heading as={"h2"}>Sign Up</Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <RegisterForm />
      </CardBody>
      <CardFooter>
        <Link
          as={ReactRouterLink}
          to={"/sign-in"}
          colorScheme="blue"
          color={"blue.500"}
        >
          sign in
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Register;
