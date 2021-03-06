import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

export default function LoginButton() {

    const { loginWithRedirect } = useAuth0();

    return (
        <Button variant='outlined' onClick={() => loginWithRedirect()}>Log In</Button>
    );
}
