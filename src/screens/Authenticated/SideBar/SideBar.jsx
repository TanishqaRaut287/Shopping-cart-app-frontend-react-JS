import React from 'react'
import {Box, Grid} from '@mui/material'

import CartTotal from '../CartTotal/CartTotal'
import Filtering from '../Filtering/Filtering'


const SideBar = ({handleFilter, shoppingCart, setShoppingCart, handleShippingFilter}) => {
  return (
    <div>
        <Box sx={{maxWidth: "100%"}}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 1 }}>
                <Grid item>
                    <Filtering handleFilter={handleFilter} handleShippingFilter={handleShippingFilter} />
                </Grid>
                <Grid item>
                    <CartTotal shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default SideBar