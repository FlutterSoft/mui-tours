import TourCard from "./components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css'
import SearchAppBar from "./components/AppBar";
import data from "./data.json"
import { Typography } from "@mui/material";

function App() {
  const renderedTours = data.map( tour => {
    return <TourCard tourName={tour.tours.name} />
  })
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{marginY: 5}}>
        {data.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h4"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map(tour => (
                  <TourCard tour={tour} key={tour.id}/>
                ))}
              </Grid>
            </>
        ))}

      </Container>
    </div>
  );
}

export default App;
