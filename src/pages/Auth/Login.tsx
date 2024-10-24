import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import LoginForm from "../../components/login/LoginForm";
const Login = () => {
  return (
    <Card shadow={"md"} w={{ base: 400, md: 500 }}>
      <CardHeader>
        <Center>
          <Heading as={"h2"}>Sign In</Heading>
        </Center>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
      <CardFooter>
        <Flex gap={2} align={"center"}>
          <Text>Don't Have An Account?</Text>
        <Link
          as={ReactRouterLink}
          to={"/sign-up"}
          colorScheme="blue"
          color={"teal.500"}
        >
          sign up
        </Link>
        </Flex>
      </CardFooter>
    </Card>
  );
};
export default Login;
