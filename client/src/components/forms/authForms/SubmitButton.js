import { Button } from '@mui/material';

const SubmitButton = ({ value }) => {

    return (
        <Button>
            <span style={{ color: '#f5f5f5' }}>
                {value}
            </span>
        </Button>
    )
}

export default SubmitButton;