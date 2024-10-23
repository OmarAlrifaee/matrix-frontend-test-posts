import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
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
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNewPostForm closeModel={onClose}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AddNewPostModel;
