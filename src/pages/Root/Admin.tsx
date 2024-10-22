import { Center, Heading, Square } from "@chakra-ui/react";

const Admin = () => {
  const user = { name: "omar" }; // placeholder
  return (
    <Square bg={"teal.500"} mt={5} p={3} borderRadius={5}>
      <Center>
        <Heading color={"white"} fontSize={"xl"} fontWeight={"bold"}>
          Hello {user.name}, You Are An Admin
        </Heading>
      </Center>
    </Square>
  );
};
export default Admin;
