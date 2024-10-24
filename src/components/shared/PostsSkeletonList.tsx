import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
const PostSkeleton = () => (
  <Card border={"1px"} overflow={"hidden"} borderColor={"blackAlpha.300"}>
    <CardHeader>
      <Flex justify={"space-between"} align={"center"}>
        <Skeleton h={3} w={20} />
        <Flex gap={3}>
          <Skeleton h={10} w={10} borderRadius={"md"} />
          <Skeleton h={10} w={10} borderRadius={"md"} />
        </Flex>
      </Flex>
    </CardHeader>
    <CardBody pt={0}>
      <SkeletonText skeletonHeight={3} />
    </CardBody>
    <CardFooter pt={0}>
      <Skeleton h={300} w={"full"} />
    </CardFooter>
  </Card>
);
const PostsSkeletonList = () => {
  return (
    <Stack spacing={10}>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </Stack>
  );
};
export default PostsSkeletonList;
