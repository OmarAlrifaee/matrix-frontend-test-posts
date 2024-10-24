import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { useId } from "react";

type Props = {
  changeImage: (files: FileList | null) => void;
  imageError?: string;
  image?: string;
};
const ImageUploader = ({ changeImage, image, imageError }: Props) => {
  const randomId = useId();
  return (
    <Tooltip label="Click To Add An Image" hasArrow placement="top">
      <FormControl isInvalid={!!imageError}>
        <FormLabel>Image</FormLabel>
        <FormLabel htmlFor={randomId} cursor={"pointer"} me={0}>
          <Image
            src={image}
            alt="image"
            border={"1px"}
            borderColor={"teal.500"}
            borderRadius={"md"}
            objectFit={"cover"}
            h={{ base: 150, md: 300 }}
            w={"100%"}
          />
        </FormLabel>
        <Input
          id={randomId}
          type="file"
          onChange={(e) => changeImage(e.target?.files)}
          focusBorderColor="teal.500"
          hidden
        />
        <FormErrorMessage>{imageError}</FormErrorMessage>
      </FormControl>
    </Tooltip>
  );
};
export default ImageUploader;
