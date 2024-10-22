import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import UpdatePostModel from "./UpdatePostModel";
import DeletePostDialog from "./DeletePostDialog";

const Post = () => {
  const imageSrc = "/assets/images.jpeg"; // placeholder
  const isAdmin = true;
  const isOwner = true;
  return (
    <Card border={"1px"} overflow={"hidden"} borderColor={"blackAlpha.300"}>
      {isAdmin || isOwner ? (
        <CardHeader>
          {/* <Flex justify={"space-between"} align={"center"}>
            <Heading
              as={"h2"}
              fontSize={"md"}
              fontWeight={"bold"}
              textTransform={"capitalize"}
            >
              Omar Alrifai
            </Heading> */}
            <Flex justify={"flex-end"} alignItems={"center"} gap={3}>
              <UpdatePostModel />
              <DeletePostDialog />
            </Flex>
          {/* </Flex> */}
        </CardHeader>
      ) : (
        ""
      )}
      <CardBody textTransform={"capitalize"}>
        <Heading
          as={"h3"}
          fontWeight={"bold"}
          fontSize={"lg"}
          color={"blackAlpha.800"}
        >
          this is a title
        </Heading>
        <Text lineHeight={1.2} mt={3} color={"blackAlpha.800"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quam
          facere quasi maxime distinctio ad, eaque neque pariatur tenetur
          minima?
        </Text>
      </CardBody>
      <CardFooter>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="image"
            borderRadius={"md"}
            objectFit={"cover"}
            h={300}
            w={"full"}
          />
        ) : (
          ""
        )}
      </CardFooter>
    </Card>
  );
};
export default Post;
