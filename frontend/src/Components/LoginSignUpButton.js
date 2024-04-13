import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function LoginSignUpButton() {
  return (
    <ButtonGroup aria-label="Basic example" size="sm">
      <Button as={Link} to="/login" variant="primary" style={{fontWeight: 'bold'}}>Login</Button>
      <Button  as={Link} to="/signup" variant="success" style={{fontWeight: 'bold'}}>Sign-Up</Button>
    </ButtonGroup>
  );
}

export default LoginSignUpButton;