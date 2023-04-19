import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Button/Button';

export default function OutlinedCard({ title, price, id, handleShoppingCart, shipping }) {

    const handleAddToCart = () => {
        handleShoppingCart(title, price, id, shipping);
    }

    return (

        <Box sx={{
            minWidth: '275px',
            borderRadius: 0,
            width: '100%'

        }}>
            <Card variant="outlined" sx={{ height: "250px" }}>

                <CardContent>
                    {shipping &&
                        <Typography sx={{
                            backgroundColor: "black",
                            color: 'white',
                            padding: "5px",
                            width: "90px",
                            marginLeft: "160px",
                            size: "small",
                            fontSize: 14
                        }} >Free Shipping</Typography>
                    }
                    {!shipping &&
                        <Box sx={{
                            padding: "5px",
                            width: "90px",
                            height: "20px"
                        }}>
                        </Box>
                    }
                    <Typography variant='middle' component="div" sx={{ textAlign: "center", marginTop: "2rem", fontSize: 20, marginBottom: "1rem" }}>
                        {title}
                    </Typography>
                    <hr color='#FFD700' width='20px' />
                    <Typography fontWeight={"bold"}
                        sx={{ textAlign: "center", marginTop: "1rem" }}>
                        {'$' + price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <PrimaryButton onClick={handleAddToCart} sx={{ width: "200px", marginLeft: "50px", borderRadius: "0", textAlign: "center" }}>Add to Cart</PrimaryButton>
                </CardActions>
            </Card>
        </Box>
    );
}