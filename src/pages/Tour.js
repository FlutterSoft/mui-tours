import { Typography, Container, Box, Grid, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material"
import ImageCollage from "../components/ImageCollage"
import CustomizedAccordions from "../components/Accordion"
import BasicModal from "../components/Modal"
import { useParams } from "react-router-dom"
import Data from '../data.json'
const Tour = () => {
    const { id } = useParams() 
    const tours = Data.filter((location) =>
    location.tours.some((tour) => tour.id === Number(id))
    )
    const tour = tours[0].tours.filter(x => x.id === Number(id))[0]
    return (
        <Container sx={{ marginBottom: "50px" }} >
            <Typography variant="h3" component="h1" marginTop={3}>
                {tour.name}
            </Typography>
            <Box>
                <Grid container spacing={2} marginTop={3} >
                    <Grid item md={7} sm={12} >
                        <img style={{ width: "100%", height: "500px", objectFit: "cover" }} src={tour.image} alt="Tour" />
                    </Grid>
                    <Grid item md={5} sm={12}>
                        <ImageCollage />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{marginBottom: '100px'}}>
                <Typography variant="h6" component="h6" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="body1" component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis ut nisl at pretium. Cras ex quam, efficitur vel luctus vel, rhoncus eu urna. Vestibulum id enim tempor, convallis ipsum placerat, egestas felis. Aenean eu orci quis purus egestas commodo vel tincidunt dolor. Praesent vel finibus massa, quis tincidunt magna. Nulla magna lectus, molestie eleifend porta et, ornare eu mauris. Phasellus mollis diam eu augue convallis efficitur. Morbi sagittis odio accumsan rhoncus pharetra. Phasellus posuere ornare risus et cursus. Nullam vestibulum iaculis orci, id lacinia eros egestas sed. Maecenas nunc dui, fringilla a eros porttitor, cursus faucibus nisl.
                </Typography>
                <Typography variant="h6" component="h6" marginTop={3} marginBottom={3}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions />
            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingTop: '10px'}} elevation={3} >
                <BottomNavigation
                    showLabels
                >
                    <BasicModal />
                    
                </BottomNavigation>
            </Paper>

        </Container>
    )
}

export default Tour