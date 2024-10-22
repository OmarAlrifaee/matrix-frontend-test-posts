import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import AddNewPostForm from "./AddNewPostForm";
const AddNewPostModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center mb={5}>
        <Button w={"full"} onClick={onOpen} colorScheme="teal">
          <Flex gap={3} alignItems={"center"}>
            <Text>Add new Post</Text>
            <AddIcon />
          </Flex>
        </Button>
      </Center>
      <Modal
        isCentered
        size={{ base: "xs", md: "xl" }}
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewPostForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" variant={"outline"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddNewPostModel;
