import { Button, Divider, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PrimaryButton from '../../../components/Button/Button';

const CartTotal = ({ shoppingCart, setShoppingCart }) => {

    const [bill, setBill] = useState(0);

    const handleTotal = () => {
        let mytotal = shoppingCart.reduce((total, { price, quantity }) => total + (price * quantity), 0);
        setBill(mytotal);
        console.log("mytotal: ", mytotal);
        console.log("bill: ", bill);
    }

    useEffect(() => {
        handleTotal();
    }, [shoppingCart]);

    const handleIncreaseQuantity = (id) => {
        const updatedShoppingCart = shoppingCart.map((myCart) => {
            if (myCart.id === id) {
                return {
                    ...myCart,
                    title: myCart.title,
                    quantity: myCart.quantity + 1,
                    price: myCart.price,
                    id: myCart.id
                };
            }
            return myCart;
        });
        setShoppingCart(updatedShoppingCart)
    };

    const handleDecreaseQuantity = (id) => {
        const updatedShoppingCart = shoppingCart.map((myCart) => {
            if (myCart.id === id && myCart.quantity > 1) {
                return {
                    ...myCart,
                    title: myCart.title,
                    quantity: myCart.quantity - 1,
                    price: myCart.price,
                    id: myCart.id
                };
            } else {
                console.log("Delete Function here")
                setShoppingCart([]);
            }
            return myCart;
        });
        setShoppingCart(updatedShoppingCart)
    }

    const handleDeleteProduct = (id) => {
        const updatedShoppingCart = shoppingCart.filter((myCart) => {
            return myCart.id !== id
        })
        setShoppingCart(updatedShoppingCart)
    }

    return (
        <div>
            <Box sx={{ padding: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography
                            sx={{ marginTop: "8px" }}
                        >
                            Cart : ({shoppingCart.length})
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <IconButton
                            sx={{ color: "black" }}
                            onClick={() => { setShoppingCart([]) }}
                        >
                            <DeleteOutlineIcon
                                sx={{
                                    fontSize: 20,
                                    marginTop: "5px",
                                    marginLeft: "60px"
                                }}
                            >
                            </DeleteOutlineIcon>
                        </IconButton>
                    </Grid>
                </Grid>

                <Divider />

                {shoppingCart.length < 1 && <Typography sx={{
                    fontSize: 14,
                    margin: "2rem"
                }}>Your cart is empty!</Typography>}

                {shoppingCart.map(({ title, price, id, quantity }) => {
                    return (
                        <Grid container key={id}>


                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography sx={{ marginTop: "1rem" }}>{title}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton
                                            sx={{ color: "black" }}
                                            onClick={() => { handleDeleteProduct(id) }}
                                        >
                                            <DeleteOutlineIcon
                                                sx={{
                                                    fontSize: 18,
                                                    marginTop: "1rem",
                                                    marginLeft: "0px"
                                                }}
                                            >
                                            </DeleteOutlineIcon>
                                        </IconButton>
                                    </Grid>
                                </Grid>

                                <hr width={40} align={"left"}/>

                                <Typography sx={{marginTop:"6px", fontSize: 16}}>Quantity: {quantity}</Typography>
                                <br />
                                <Typography sx={{marginLeft: "70px", marginBottom: "1rem", color: "gold"}}>{'$' + price}</Typography>
                                <Box sx={{marginLeft: "30px", marginBottom: "1rem"}}>
                                <PrimaryButton sx={{height: "20px", width: "2px", margin: "1px"}} onClick={() => handleIncreaseQuantity(id)}>+</PrimaryButton>
                                <PrimaryButton sx={{height: "20px", width: "2px", margin: "1px"}} onClick={() => handleDecreaseQuantity(id)} >-</PrimaryButton>
                                </Box>
                                
                            </Grid>

                            <Grid item xs={12}>
                                <Typography sx={{ fontWeight: "bold" }}>Total {'$' + (quantity * price)}</Typography>
                                <hr />
                            </Grid>
                        </Grid>
                    )


                })}
                {bill !== 0 && <Typography sx={{ fontWeight: "bold", fontSize: 16 }}> Total Bill Amount: {'$' + bill} </Typography>}
            </Box>

        </div>
    )
}

export default CartTotal;