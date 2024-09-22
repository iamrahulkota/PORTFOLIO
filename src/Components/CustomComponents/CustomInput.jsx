import { Button, styled, TextField } from "@mui/material";

export const StyledInput = styled(TextField)({
    width: '100%', 
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: 'white',
        '& fieldset': {
        borderColor: '#e0e0e0',
        borderWidth: '1px',
        },
        '&:hover fieldset': {
        borderColor: '#bdbdbd',
        borderWidth: '1px',
        },
        '&.Mui-focused fieldset': {
        borderColor: '#bdbdbd', 
        borderWidth: '1px',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '15px',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        boxShadow: 'none',
    },
});