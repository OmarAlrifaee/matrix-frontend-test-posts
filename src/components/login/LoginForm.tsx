import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, loginFormFailds } from "../../lib/zod/schemas";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useCallback } from "react";
const LoginForm = () => {
  const loginForm = useForm<loginFormFailds>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<loginFormFailds> = useCallback(async (data) => {
    console.log(data);
  }, []);
  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!loginForm.formState.errors.email?.message}>
        <FormLabel>Email</FormLabel>
        <Input type="email" {...loginForm.register("email")} />
        <FormErrorMessage>
          {loginForm.formState.errors.email?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        mt={5}
        isInvalid={!!loginForm.formState.errors.password?.message}
      >
        <FormLabel>Password</FormLabel>
        <Input type="password" {...loginForm.register("password")} />
        <FormErrorMessage>
          {loginForm.formState.errors.password?.message}
        </FormErrorMessage>
      </FormControl>
      <Button
        isDisabled={false}
        isLoading={false}
        mt={5}
        type="submit"
        w={"full"}
        colorScheme="blue"
      >
        Sign In
      </Button>
    </form>
  );
};
export default LoginForm;
