import { Button, Checkbox, Grid, ListItemText, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import PrimaryButton from '../../../components/Button/Button'
import MultipleSelectCheckmarks from '../../../components/CheckBox/CheckBox'


const AddProduct = ({ handleClose, handleAddNewProduct }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [availableSizes, setAvailableSizes] = useState('');
    const [isFreeShipping, setIsFreeShipping] = useState(false);


    const shippingDropdown = [
        {
            value: "true",
            label: "Free",
        },
        {
            value: "false",
            label: "Paid",
        },
    ];

    const sizesDropdown = [
        {
            value: "XS",
            label: "XS"
        },
        {
            value: "S",
            label: "S"
        },
        {
            value: "M",
            label: "M"
        },
        {
            value: "ML",
            label: "ML"
        },
        {
            value: "L",
            label: "L"
        },
        {
            value: "XL",
            label: "XL"
        },
        {
            value: "XXL",
            label: "XXL"
        },
    ]

    const addProductsData = () => {
        if (title !== ''
            &&
            price !== ''
            &&
            availableSizes !== ''
            &&
            isFreeShipping !== " ") {
            handleAddNewProduct(title, price, availableSizes, isFreeShipping);
            handleClose();
        }
        else{
        //    if(title===''){
        //     console.log("Title cannot be null!");
        //    }else
        //    if(price==='' && price < 0){
        //     alert("Price cannot be null or negative!");
        //    }else
        //    if(availableSizes === ''){
        //     alert("Please select a size!");
        //    }else
        //    if(isFreeShipping === ''){
        //     alert("Please choose shipping option!")
        //    }

        alert("All fields are mandatory!");
        }
    }

    return (
        <div>
            <Box sx={{ padding: "10px", margin: "8px" }}>
                <Grid container spacing={1}
                    sx={{
                        marginLeft: "110px",

                    }}>
                    <Grid item xs={12}>
                        <Typography>Title</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={title}
                            type="text"
                            onChange={(e) => { setTitle(e.target.value) }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            value={price}
                            type="number"
                            onChange={(e) => { setPrice(e.target.value) }}
                        />
                    </Grid>


                    <Grid item xs={12}>
                        <Typography>Size</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <MultipleSelectCheckmarks /> */}
                        <TextField

                            required
                            value={availableSizes}
                            select
                            id="outlined-select-currency"
                            onChange={(e) => { setAvailableSizes(e.target.value) }}
                            sx={{ width: '225px' }}
                        >
                            {sizesDropdown.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item>
                        <Typography>Shipping</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField

                            required
                            value={isFreeShipping}
                            select
                            id="outlined-select-currency"
                            onChange={(e) => { setIsFreeShipping(e.target.value) }}
                            sx={{ width: '225px' }}
                        >
                            {shippingDropdown.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <PrimaryButton onClick={addProductsData} sx={{ marginLeft: "85px", marginTop: "1.7rem" }}>ADD</PrimaryButton>
                </Grid>
            </Box>
        </div>
    )
}

export default AddProduct