

import { RecipePage } from "./pages/RecipePage";
import { RecipeSearch } from "./components/ui/RecipeSearch";
import { Box, CSSReset, ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import { RippleEffect } from "./components/ui/RippleEffect";

const theme = extendTheme({
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    blue: {
      500: '#2196F3',
    },
  },
});


export const App = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const Title = "Winc Recipe Checker";
  
  return (
    <Box bg={"blue.400"} align="center" flexDirection="column">
       <ChakraProvider theme={theme}>
      <CSSReset />
      <RippleEffect/>
      {selectedItem ? (
        <RecipePage recipe={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <>
          <Heading p="5" fontWeight={"650"} align="center" color="white">
            {Title}
          </Heading>
          <RecipeSearch clickFn={setSelectedItem} />
        </>
      )}
      </ChakraProvider>
</Box>
  );
};
