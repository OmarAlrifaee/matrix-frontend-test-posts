import { Center, Heading, Square } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/store";

const Admin = () => {
  const user = useAppSelector((state) => state.authSlice.user?.user);
  return (
    <Square bg={"teal.500"} mt={5} p={3} borderRadius={5}>
      <Center>
        <Heading color={"white"} fontSize={"xl"} fontWeight={"bold"}>
          Hello {user?.name}, You Are An Admin
        </Heading>
      </Center>
    </Square>
  );
};
export default Admin;
