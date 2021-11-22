import LoginForm from "./authForms/LoginForm";
import RegisterForm from "./authForms/RegisterForm";
import SubmitButton from "./authForms/SubmitButton";

const Form = ({ type }) => {

    return (
        <div>
            {type === 'login'
                ?
                <LoginForm>
                    <SubmitButton value="Sign in" />
                </LoginForm>
                : null
            }

            {type === 'register'
                ?
                <RegisterForm>
                    <SubmitButton value="Sign up" />
                </RegisterForm>
                : null
            }
        </div>
    )
}

export default Form;