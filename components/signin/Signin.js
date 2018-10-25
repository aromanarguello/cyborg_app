import { CardContainer, InnerCardContainer, SubmitRow } from '../styles/Credentials.styles'
import { Input, InputAdornment, Button, withStyles } from '@material-ui/core';
import { LOGIN_MUTATION } from '../../grapqhl/mutations';
import { Mutation } from 'react-apollo';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Keyboard from '@material-ui/icons/Keyboard';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;
}

const Signin = ({ inputOnChange, setUserInfo, emailInput, passwordInput }) => (
    <Mutation mutation={LOGIN_MUTATION}>
    {(login, { error, loading }) => (
        <CardContainer>
            <form method="post" onSubmit={async (e) =>{
                e.preventDefault()
               const { data: { login: { token, user: {
                   firstName,
                   middleName,
                   lastName,
                   email,
                   id
               } } }} = await login({ variables })
               setUserInfo(firstName, middleName, lastName, email, id, token)
            }
         }>
            <InnerCardContainer >
                <Input
                        type="email"
                        className="signInInput"
                        name="emailInput"
                        onChange={inputOnChange}
                        value={emailInput}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle className="loginIcons"/>
                            </InputAdornment>
                        }
                />
                    <Input
                        className="signInInput"
                        name="passwordInput"
                        type="password"
                        value={passwordInput}
                        onChange={inputOnChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <Keyboard className="loginIcons" />
                            </InputAdornment>
                        }
                    />
            </InnerCardContainer>
            <SubmitRow>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Ingrese
                </Button>
            </SubmitRow>
            </form>
        </CardContainer>
    )}
    </Mutation>
)

export default withStyles(styles)(Signin);