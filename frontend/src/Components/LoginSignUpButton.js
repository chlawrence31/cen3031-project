import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function LoginSignUpButton() {
  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      <Button variant="outline-primary" style={{fontWeight: 'bold'}}>Login</Button>
      <Button variant="success" style={{fontWeight: 'bold'}}>Sign-Up</Button>
    </ButtonGroup>
  );
}

export default LoginSignUpButton;