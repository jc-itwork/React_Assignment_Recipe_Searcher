import { Tag as CTag } from "@chakra-ui/react";

const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={2}
      size="sm"
      bg="white"
      color="black"
      {...props}
      border="1px lightgrey solid"
      borderRadius={"10px"}
      align="center"
    >
      {children}
    </CTag>
  );
};
