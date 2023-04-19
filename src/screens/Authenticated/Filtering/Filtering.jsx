import { Fab, Typography, Box, Divider, Grid } from '@mui/material';
import PrimaryButton from '../../../components/Button/Button';

const Filtering = ({ handleFilter, handleShippingFilter }) => {

    const handleClearFilter = () => {
        handleFilter('');
    };

    const handleShippingFree = () => {
        handleShippingFilter(true)
    };

    const handleShippingPaid = () => {
        handleShippingFilter(false);
    }

    return (
        <div>
            <Box sx={{
                padding: "1rem",
                width: "100%"
            }}>
                <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 1 }} >
                    <Grid item xs={6}>
                        <Typography sx={{ margin: "10px" }}>Sizes</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <PrimaryButton
                            onClick={handleClearFilter}
                            sx={{
                                fontSize: 10,
                                marginTop: "6px",

                            }}
                        >Clear Filter</PrimaryButton>
                    </Grid>
                </Grid>

                <Divider />

                <Box sx={{ marginTop: "1rem" }}>
                    <Fab onClick={() => { handleFilter('XS') }} size="small" sx={{ margin: "4px" }}>
                        XS
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('S') }} sx={{ margin: "4px" }}>
                        S
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('M') }} sx={{ margin: "4px" }}>
                        M
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('ML') }} sx={{ margin: "4px" }}>
                        ML
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('L') }} sx={{ margin: "4px" }}>
                        L
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('XL') }} sx={{ margin: "4px" }}>
                        XL
                    </Fab>
                    <Fab size="small" onClick={() => { handleFilter('XXL') }} sx={{ margin: "4px" }}>
                        XXL
                    </Fab>
                </Box>


                <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 1 }} sx={{marginTop: "1.5rem"}} >
                    <Grid item xs={6}>
                        <Typography sx={{ margin: "10px" }}>Shipping</Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <PrimaryButton
                            onClick={handleClearFilter}
                            sx={{
                                fontSize: 10,
                                marginTop: "6px",

                            }}
                        >Clear Filter</PrimaryButton>
                    </Grid>
                </Grid>

                <Divider />

                <Box sx={{ marginTop: "1rem" }}>
                    <Fab onClick={handleShippingFree} size="medium" sx={{ margin: "4px", fontSize: 12, fontWeight: "bold" }}>
                        Free
                    </Fab>
                    <Fab size="medium" onClick={handleShippingPaid} sx={{ margin: "4px", fontSize: 12, fontWeight: "bold" }}>
                        Paid
                    </Fab>
                </Box>

            </Box>

        </div>
    )
}

export default Filtering