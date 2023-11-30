import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export default function NavBar(){
    const nav = useNavigate();
    const auth = useAuth();

    const handleLougout = () => {
        auth.setAuthenticated(false);
        auth.setUserEmail("");
        auth.setUserID(0);
        auth.setUserName("");
        nav('/');
    }

    const handleMyProfile = () => {
        nav('/profile');
    }

    return(
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link to="/lobby">
                    <Navbar.Brand>SY's chat</Navbar.Brand>
                </Link>
                {auth.authenticated ? 
                (<>
                    <Button type="button" onClick={handleMyProfile}>
                        Profile
                    </Button>
                    <Button type="button" onClick={handleLougout}>
                        Logout
                    </Button>
                    </>) 
                : null
                }
            </Container>
        </Navbar>
    )
}
