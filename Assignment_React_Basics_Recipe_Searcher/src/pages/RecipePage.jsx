import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  VStack,
  Stack,
  Text,
  Box,
  Wrap,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const roundedCals = Math.round(recipe.calories);
  const roundedFat = Math.round(recipe.totalNutrients.FAT.quantity);
  const roundedCarbs = Math.round(recipe.totalNutrients.CHOCDF.quantity);
  const roundedProtein = Math.round(recipe.totalNutrients.PROCNT.quantity);
  const roundedCholesterol = Math.round(recipe.totalNutrients.CHOLE.quantity);
  const roundedSodium = Math.round(recipe.totalNutrients.NA.quantity);
  const unitGram = recipe.totalNutrients.PROCNT.unit;
  const unitMilligram = recipe.totalNutrients.CHOLE.unit;
  const handleRippleComplete = async (recipe) => {
    await new Promise((resolve) => setTimeout(resolve, 450));
    clickFn();
  };
  return (
    <Center bg="blue.400" maxH="200vh" flexDirection={"column"}>
      <Card borderRadius={"0"} bg="white" maxW="3xl" maxH={"6xl"}>
        <Flex alignItems="center" m="3">
          <ChevronLeftIcon
            boxSize={6}
            _active={{
              transform: "scale(1.5)",
              borderRadius: "25px",
            }}
            cursor={"pointer"}
            onClick={() => handleRippleComplete(recipe)}
          />

          <Image
            ml={"45%"}
            w="40px"
            src="https://global-uploads.webflow.com/5ee34869dd28cd4237e2a5f2/6489e1a1ecc6f9aaa67ebb8b_symbol.svg"
          />
        </Flex>
        <Box
          top={0}
          left={0}
          right={0}
          bottom={0}
          h="35vh"
          w={"100%"}
          position={"relative"}
          backgroundImage={recipe.image}
          backgroundSize="cover"
          backgroundPosition="center"
          alt={recipe.label}
        />
        <CardBody align={"center"} flexDir={"column"}>
          <Flex>
            <VStack pl="2" pr="6" w="50%" align={"baseline"}>
              <Badge fontSize={"11px"} textColor="grey">
                {recipe.mealType}
              </Badge>
              <Heading size="sm">{recipe.label}</Heading>
              <Text>
                Total Cooking Time: <b>{recipe.totalTime} Minutes</b>
              </Text>
              <Text>
                Servings: <b>{recipe.yield}</b>
              </Text>
              <Stack align={"baseline"}>
                <Heading size="sm">Ingredients:</Heading>
                {recipe.ingredientLines.map((label) => (
                  <text align="initial" key={label} mr={2}>
                    {label}
                  </text>
                ))}
              </Stack>
            </VStack>
            <VStack pl="2" w="50%" align={"baseline"}>
              <Heading fontWeight="semibold" size="sm">
                Health labels:
              </Heading>
              <Wrap spacing={"12px"} justify="initial">
                {recipe.healthLabels.map((label) => (
                  <Badge fontSize={"12px"} key={label} colorScheme="purple">
                    {label}
                  </Badge>
                ))}
              </Wrap>

              <Heading fontWeight="semibold" size="sm">
                Diet:
              </Heading>
              <Wrap>
                {recipe.dietLabels.map((label) => (
                  <Badge fontSize={"12px"} key={label} colorScheme="green">
                    {label}
                  </Badge>
                ))}
              </Wrap>
              <Heading fontWeight="semibold" size="sm">
                Cautions:
              </Heading>
              <Wrap>
                {recipe.cautions.map((label) => (
                  <Badge fontSize={"12px"} key={label} colorScheme="red" mr={2}>
                    {label}
                  </Badge>
                ))}
              </Wrap>
              <Heading fontWeight="semibold" size="sm">
                Total nutrients:
              </Heading>
              <SimpleGrid
                align="initial"
                colorScheme="white"
                columns={4}
                spacing={2}
              >
                <Flex flexDirection={"column"}>
                  <Box>{roundedCals}</Box>
                  <Badge p="0" colorScheme="white" fontSize={"12px"}>
                    Calories
                  </Badge>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Box>
                    {roundedCarbs} {unitGram}
                  </Box>
                  <Badge p="0" colorScheme="white" fontSize={"12px"}>
                    Carbs
                  </Badge>
                </Flex>

                <Flex flexDirection={"column"}>
                  <Box>
                    {roundedProtein} {unitGram}
                  </Box>
                  <Badge p="0" colorScheme="white" fontSize={"12px"}>
                    protein
                  </Badge>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Box>
                    {roundedFat} {unitGram}
                  </Box>
                  <Badge p="0" colorScheme="white" fontSize={"12px"}>
                    fat
                  </Badge>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Box align="initial">
                    {roundedCholesterol} {unitMilligram}
                  </Box>
                  <Badge colorScheme="white" p="0" fontSize={"12px"}>
                    cholesterol
                  </Badge>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Box align="initial">
                    {roundedSodium} {unitMilligram}
                  </Box>
                  <Badge p="0" colorScheme="white" fontSize={"12px"}>
                    sodium
                  </Badge>
                </Flex>
              </SimpleGrid>
            </VStack>
          </Flex>
        </CardBody>
      </Card>
    </Center>
  );
};
