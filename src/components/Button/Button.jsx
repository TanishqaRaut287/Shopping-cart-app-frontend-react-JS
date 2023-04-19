import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)(() => ({
    color: "white",
    backgroundColor: "black",
    '&:hover': {
      backgroundColor: "#FFD700",
      color: "black"   
    },
  }));

export default PrimaryButton