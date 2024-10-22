import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, loginFormFailds } from "../../lib/zod/schemas";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { useLoginMutation } from "../../redux/api-slices/authApiSlice";
const LoginForm = () => {
  const [loginUser, loginUserResults] = useLoginMutation();
  const loginForm = useForm<loginFormFailds>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<loginFormFailds> = useCallback(
    async (data) => {
      await loginUser(data);
    },
    [loginUser]
  );
  return (
    <form onSubmit={loginForm.handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormControl isInvalid={!!loginForm.formState.errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...loginForm.register("email")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {loginForm.formState.errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!loginForm.formState.errors.password?.message}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...loginForm.register("password")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {loginForm.formState.errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          isDisabled={loginUserResults.isLoading}
          isLoading={loginUserResults.isLoading}
          type="submit"
          w={"full"}
          colorScheme="teal"
        >
          Sign In
        </Button>
      </Stack>
    </form>
  );
};
export default LoginForm;
