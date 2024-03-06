import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function LoginSignUpButton() {
  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      <Button variant="secondary">Login</Button>
      <Button variant="secondary">Sign-Up</Button>
    </ButtonGroup>
  );
}

export default LoginSignUpButton;