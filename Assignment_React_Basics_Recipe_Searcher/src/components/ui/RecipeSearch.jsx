import React, { useState } from "react";
import { data } from "../../utils/data";
import { RecipeListPage } from "../../pages/RecipeListPage";
import { SearchInput } from "./SearchInput";


export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState('');

  const filteredRecipes = data.hits.filter(({ recipe }) => {
    const lowerCaseLabel = recipe.label.toLowerCase().replace(/-/g, "");
    const lowerCaseSearchField = searchField.toLowerCase().replace(/-/g, "");
    const labelMatch = lowerCaseLabel.includes(lowerCaseSearchField);
    const healthLabelsOneString = recipe.healthLabels.join(",");
    const lowerCaseHealthLabelsOneString = healthLabelsOneString
      .toLowerCase()
      .replace(/-/g, "");
    const healthLabelsMatch =
      lowerCaseHealthLabelsOneString.includes(lowerCaseSearchField);
    return labelMatch || healthLabelsMatch;
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <SearchInput
        bg="white"
        id={"recipe"}
        w={400}
        mb={4}
        type="text"
        value={searchField}
        onChange={handleChange}
        placeholder="Search recipes"
      /> 
      <RecipeListPage
        clickFn={clickFn}
        recipes={filteredRecipes.map((hit) => hit.recipe)}
      />
    </>
  );
};
