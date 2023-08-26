import { Grid, GridItem, Show } from "@chakra-ui/react";


function App() {
  

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`, // >= 0px
      lg: `"nav nav" "aside main"` // >= 992px https://chakra-ui.com/docs/styled-system/responsive-styles
    }}>
      <GridItem area='nav' bg='coral'>Nav</GridItem>
      <Show above="lg">
        <GridItem area='aside' bg='gold'>Aside</GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  );
}

export default App
