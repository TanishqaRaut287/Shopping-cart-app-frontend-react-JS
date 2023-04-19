import { Backdrop, Fade, IconButton, Modal, Typography } from '@mui/material'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

import './styles.css';

const ModalComponent = ({ open, handleClose, Component, handleAddNewProduct }) => {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className="popform">
                    <Typography
                        sx={{
                            position: "relative",
                            top: "3rem",
                            left: "3.9rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "20px",
                            color: "black",
                            lineHeight: "24px",
                            marginBottom: "10px",
                        }}
                    >
                        Add Product
                    </Typography>

                    <IconButton
                        onClick={handleClose} sx={{
                            marginLeft: "420px",
                            marginTop: "8px",
                            borderRadius: "0.5rem",
                        }}>
                        <CloseSharpIcon fontSize={"small"} />
                    </IconButton>

                    <Component handleClose={handleClose} handleAddNewProduct={handleAddNewProduct}/>
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalComponent;