import { Box, useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";
import { useAppSelector } from "../../redux/store";

const CustomToast = () => {
  const toastState = useAppSelector((state) => state.toastSlice);
  const toast = useToast();
  const buttonRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    if (toastState.open) buttonRef.current.click();
  }, [toastState]);
  const onClick = useCallback(() => {
    toast({
      position: "bottom-left",
      duration: 3000,
      title: toastState.toast.title,
      description: toastState.toast.description,
      status: toastState.toast.status,
      isClosable: true,
    });
  }, [toast, toastState]);
  return <Box hidden ref={buttonRef} onClick={onClick} />;
};
export default CustomToast;
