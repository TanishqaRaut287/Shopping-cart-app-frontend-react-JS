import React, { useState } from 'react'
import { Box, Grid, Typography, Divider } from '@mui/material';

import OutlinedCard from '../../../components/ProductCard/ProductCard'
import PrimaryButton from '../../../components/Button/Button';
import { productsData } from '../../../utils/ProductsData';
import SideBar from '../SideBar/SideBar';
import ModalComponent from '../../../components/Modal/ModalComponent';
import AddProduct from '../AddProduct/AddProduct';


const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState([]);
    const [open, setOpen] = useState(false);
    const [foundProducts, setFoundProducts] = useState(productsData);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(!open);

    const handleShoppingCart = (title, price, id) => {
        const ProductExist = shoppingCart.find(item => item.id === id);
        console.log("ProductExists?: ", ProductExist)
        if (ProductExist === undefined) {
            const updatedShoppingCart = [
                ...shoppingCart,
                {
                    title: title,
                    quantity: 1,
                    price: price,
                    id: id
                },
            ];
            setShoppingCart(updatedShoppingCart);

        } else {
            const updatedShoppingCart = shoppingCart.map((myCart) => {
                if (myCart.id === id) {
                    return {
                        ...myCart,
                        title: title,
                        quantity: myCart.quantity + 1,
                        price: price,
                        id: id
                    };
                }
                return myCart;
            });
            setShoppingCart(updatedShoppingCart)
        }

    };

    const handleFilter = (size) => {
        console.log(size);
        if (size !== '') {
            const results = productsData.filter((product) => {
                return product.availableSizes.includes(size)
            });
            setFoundProducts(results);
        }
        else {
            setFoundProducts(productsData);
        }
    }

    const handleShippingFilter = (shipping) => {
        console.log(shipping);

        const results = productsData.filter((myCart) => {
            return myCart.isFreeShipping == shipping
        })

        setFoundProducts(results)

        // const results = productsData.filter((product) => {
        //     return product.isFreeShipping.includes(shipping)
        // });
        // setFoundProducts(results)

    }

    const handleAddNewProduct = (title, price, availableSizes, isFreeShipping) => {
        const updatedShoppingCart = [
            {
                id: Math.round(Math.random() * 9999),
                title: title,
                price: price,
                availableSizes: availableSizes,
                isFreeShipping: isFreeShipping
            },
            ...foundProducts
        ];
        setFoundProducts(updatedShoppingCart);

    }



    return (
        <div>
            <Box sx={{width: "100%"}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                    <Grid item xs={2}>
                        <SideBar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} handleFilter={handleFilter} handleShippingFilter={handleShippingFilter} />
                    </Grid>

                    <Grid item xs={10}>
                        <Box
                            sx={{
                                padding: "5px",
                                margin: "10px"
                            }}
                        >
                            <ModalComponent
                                Component={AddProduct}
                                handleClose={handleClose}
                                open={open}
                                handleAddNewProduct={handleAddNewProduct}
                            />

                            <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                                <Grid item xs={6}>
                                    <Typography
                                        sx={{ padding: "10px" }}>
                                        {foundProducts.length} product(s) available
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} >
                                    <PrimaryButton
                                        onClick={handleOpen}
                                        sx={{ fontSize: 14, marginLeft: "120px" }}>
                                        Add Product
                                    </PrimaryButton>
                                </Grid>
                            </Grid>

                            <Divider sx={{ marginBottom: "1rem" }} />

                            
                            <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                                {foundProducts.map((product) => {
                                    return (
                                        <Grid item xs key={product.id}>
                                            <OutlinedCard
                                                shipping={product.isFreeShipping}
                                                id={product.id}
                                                title={product.title}
                                                price={product.price}
                                                handleShoppingCart={handleShoppingCart}
                                            />
                                        </Grid>
                                    );

                                })

                                }
                            </Grid>
                        </Box >
                    </Grid>
                </Grid>
            </Box>

        </div >
    )
}

export default ShoppingPage