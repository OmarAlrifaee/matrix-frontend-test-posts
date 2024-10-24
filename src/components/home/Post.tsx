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
import { useAppSelector } from "../../redux/store";
import { Post as PostType } from "../../types/posts";
import { formatDate } from "../../utils/formatData";
type Props = {
  post: PostType;
};
const Post = ({ post }: Props) => {
  const user = useAppSelector((state) => state.authSlice.user);
  const isAdmin = user?.type === "admin";
  const isOwner = user?.user.id === post.user_id;
  return (
    <Card
      shadow={"md"}
      border={"1px"}
      overflow={"hidden"}
      borderColor={"blackAlpha.300"}
    >
      <CardHeader>
        <Flex justify={"space-between"} alignItems={"center"} gap={3}>
          <Text fontWeight={"medium"} mr={"auto"} fontSize={"sm"}>
            Last Update:{" "}
            <Text as={"span"} fontWeight={"normal"}>
              {formatDate(post.updated_at)}
            </Text>
          </Text>
          {isAdmin || isOwner ? (
            <Flex gap={3}>
              <UpdatePostModel post={post} />
              <DeletePostDialog postId={post.id} />
            </Flex>
          ) : (
            ""
          )}
        </Flex>
      </CardHeader>
      <CardBody textTransform={"capitalize"} pt={0}>
        <Heading
          as={"h3"}
          fontWeight={"bold"}
          fontSize={"lg"}
          color={"blackAlpha.800"}
        >
          {post.title}
        </Heading>
        <Text lineHeight={1.2} mt={2} color={"blackAlpha.800"}>
          {post.description}
        </Text>
      </CardBody>
      <CardFooter>
        {post?.image ? (
          <Image
            src={post.image}
            alt={`${post.title} image`}
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
