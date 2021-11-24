import { makeStyles } from '@mui/styles';

import LoginForm from "./authForms/LoginForm";
import RegisterForm from "./authForms/RegisterForm";
import SubmitButton from "./authForms/SubmitButton";

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


    const submitLogin = () => {
        closeModal();
    }


    const submitRegister = () => {
        closeModal();
    }

    return (
        <div>
            {type === 'login'
                ?
                <LoginForm classes={classes} textColor={textColor} >
                    <SubmitButton onSubmitFunction={submitLogin} value="Sign in" />
                </LoginForm>
                : null
            }

            {type === 'register'
                ?
                <RegisterForm classes={classes} >
                    <SubmitButton onSubmitFunction={submitRegister} value="Sign up" />
                </RegisterForm>
                : null
            }
        </div>
    )
}

export default Form;