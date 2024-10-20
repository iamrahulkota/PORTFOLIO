import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)({
    color: '#FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '25px',
    padding: '8px 20px',
    fontSize: '12px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
    '&:hover': {
        borderColor: '#FFFFFF',
    },
});

export default function CustomButton({
    buttonText,
    buttonOnClick
}){
    return (
        <StyledButton variant="outlined" onClick={buttonOnClick}>{buttonText}</StyledButton>
    )
}