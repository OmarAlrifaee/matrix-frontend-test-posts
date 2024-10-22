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
import LoginForm from "../../components/login/LoginForm";
const Login = () => {
  return (
    <Card w={500}>
      <CardHeader>
        <Center>
          <Heading as={"h2"}>Sign In</Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
      <CardFooter>
        <Link
          as={ReactRouterLink}
          to={"/sign-up"}
          colorScheme="blue"
          color={"blue.500"}
        >
          sign up
        </Link>
      </CardFooter>
    </Card>
  );
};
export default Login;
