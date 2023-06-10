import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
const Home = ({ list }) => {

    return (
        <div className="App">
            <Container sx={{ marginY: 5 }}>
                {list?.map((city) => (
                    <Container key={city.id}>
                        <Typography
                            variant="h4"
                            component="h4"
                            marginTop={5}
                            marginBottom={3}
                        >
                            Top {city.name} Tours
                        </Typography>
                        <Grid container spacing={5}>
                            {city.tours?.map(tour => (
                                <TourCard tour={tour} key={tour.id} />
                            ))}
                        </Grid>
                    </Container>
                ))}
            </Container>
        </div>
    )
}

export default Home