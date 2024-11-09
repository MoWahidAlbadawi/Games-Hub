import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {

  return (
    <Grid templateRows={'reapeat(2,1fr)'} templateColumns={'reapet(2,1fr)'}>
      <GridItem rowSpan={1} colSpan={2}>
        <NavBar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg='purple.500' display={{base : 'none' , lg : 'block'}}>aside</GridItem>
      <GridItem rowSpan={1} colSpan={{base : 2 , lg : 1}} bg='green.500'>main</GridItem>
    </Grid>
  )
}

export default App
