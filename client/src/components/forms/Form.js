import { makeStyles } from '@mui/styles';

import LoginForm from "./authForms/LoginForm";
import RegisterForm from "./authForms/RegisterForm";

const Form = ({ closeModal, type, textColor }) => {
    const useStyles = makeStyles({
        myComponent: {
          "& .MuiInputLabel-root": {
            color: textColor
          },
          "& .MuiInput-root": {
            color: textColor
          },
          "& .MuiFormControl-root": {
            color: textColor
          }
        }
      });

  const classes = useStyles();

    return (
        <div>
            {type === 'login'
                ?
                <LoginForm closeModal={closeModal} classes={classes} />
                : null
            }

            {type === 'register'
                ?
                <RegisterForm closeModal={closeModal} classes={classes} />
                : null
            }
        </div>
    )
}

export default Form;