import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { registerFormFailds, registerFormSchema } from "../../lib/zod/schemas";
import { useCallback } from "react";
const RegisterForm = () => {
  const registerForm = useForm<registerFormFailds>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<registerFormFailds> = useCallback(
    async (data) => {
      if (data.password !== data.password_confirmation)
        registerForm.setError("password_confirmation", {
          message: "Please Make Sure You Entered The Same Value As Password",
        });
      console.log(data);
    },
    [registerForm]
  );
  return (
    <form onSubmit={registerForm.handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormControl
          isInvalid={!!registerForm.formState.errors.username?.message}
        >
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            {...registerForm.register("username")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.username?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!registerForm.formState.errors.email?.message}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...registerForm.register("email")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.email?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!registerForm.formState.errors.password?.message}
        >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...registerForm.register("password")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.password?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!registerForm.formState.errors.password_confirmation?.message}
        >
          <FormLabel>Password Agine</FormLabel>
          <Input
            type="password"
            {...registerForm.register("password_confirmation")}
            focusBorderColor="teal.500"
          />
          <FormErrorMessage>
            {registerForm.formState.errors.password_confirmation?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          isDisabled={false}
          isLoading={false}
          type="submit"
          w={"full"}
          colorScheme="teal"
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};
export default RegisterForm;
