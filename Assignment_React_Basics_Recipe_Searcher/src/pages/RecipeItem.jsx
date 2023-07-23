
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Badge,
  Heading,
  Flex,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  const handleRippleComplete = () => {
    clickFn(recipe);
  };

  return (
    <Card
      bg="white"
      w="16em"
      h="25em"
      onClick={handleRippleComplete}
      cursor="pointer"
      _hover={{ transform: "scale(1.03)" }}
    >
      <CardBody p="0">
        <Image
          h="30vh"
          w="100%"
          borderTopRadius="md"
          src={recipe.image}
          alt={recipe.label}
          mb={1}
        />
        <Stack align="center" p="3">
          <Badge fontSize="11px" textColor="gray">
            {recipe.mealType}
          </Badge>
          <Heading key={recipe.label} as="h3" size="sm">
            {recipe.label}
          </Heading>
          <Flex>
            {/* Add the vegetarian and vegan badges */}
            {recipe.healthLabels.includes("Vegetarian") && (
              <Badge fontSize="11px" colorScheme="purple" mr={2}>
                Vegetarian
              </Badge>
            )}
            {recipe.healthLabels.includes("Vegan") && (
              <Badge fontSize="11px" colorScheme="purple" mr={2}>
                Vegan
              </Badge>
            )}
          </Flex>
          <Wrap justify="center">
            {recipe.dietLabels.map((label) => (
              <Badge fontSize={"11px"} key={label} colorScheme="green" mr={2}>
                {label}
              </Badge>
            ))}
          </Wrap>
          <Text fontSize="13px">
            Dish: <b>{recipe.dishType}</b>
          </Text>
          <Text fontSize="14px">Cautions:</Text>
          <Wrap justify="center">
            {recipe.cautions.length > 0 ? (
              recipe.cautions.map((label) => (
                <WrapItem key={label}>
                  <Badge fontSize="11px" colorScheme="red" mr={3} mt={0}>
                    {label}
                  </Badge>
                </WrapItem>
              ))
            ) : (
              <WrapItem>
                <Badge colorScheme="gray" mr={2}>
                  none
                </Badge>
              </WrapItem>
            )}
          </Wrap>
        </Stack>
      </CardBody>
    </Card>
  );
};
