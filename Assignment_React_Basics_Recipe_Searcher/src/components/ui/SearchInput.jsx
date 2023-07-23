import React from "react";
import { Input } from "@chakra-ui/react";

export const SearchInput = ({ onChange, ...props }) => {
  return <Input onChange={onChange} {...props} />;
};
