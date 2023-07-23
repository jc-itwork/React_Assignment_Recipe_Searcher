import React from "react";
import { Center, Wrap } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const handleRippleComplete = async (recipe) => {
    // Add a delay of 1000ms before executing the clicked action
    await new Promise((resolve) => setTimeout(resolve, 450));

    // Now perform the actual clicked action after the delay
    // For example:
    clickFn(recipe);
  };

  return (
    <>
      <Center justify="center" align="center" pb="20" maxW="1200px" h="90%">
        <Wrap
          justify="center"
          align="center"
          spacing="5"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          }}
        > 
          {recipes.map((recipe) => (
            <RecipeItem key={recipe.label} recipe={recipe} clickFn={() => handleRippleComplete(recipe)} />
          ))}
        </Wrap>
      </Center>
    </>
  );
};
