import { Button } from '@mui/material';

const SubmitButton = ({ value, onSubmitFunction }) => {

    return (
        <Button onClick={onSubmitFunction} sx={{mt: 5}}>
            <span style={{ color: '#f5f5f5' }}>
                {value}
            </span>
        </Button>
    )
}

export default SubmitButton;