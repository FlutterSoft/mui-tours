import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from "@mui/icons-material"
import Rating from "@mui/material/Rating"
import { createTheme, ThemeProvider } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 12
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 10,
                    },
                },
            ],
        },
    },
})

export default function TourCard({tour}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${tour.id}`)
    }
    return (
        <Grid item md={3} sm={4} xs={12}>
            <ThemeProvider theme={theme}>
                <Paper sx={{cursor: 'pointer'}} elevation={3} onClick={handleClick}>
                    <img className="img" src={tour.image} alt="" />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <AccessTime sx={{ width: "14px" }} />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                            marginTop={3}
                        >
                            <Rating name="read-only" readOnly value={tour.rating} precision={0.5} size="small" />
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant="body3" component="p" marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h3" marginTop={0}>
                                From AUD ${tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>

        </Grid>
    )
}