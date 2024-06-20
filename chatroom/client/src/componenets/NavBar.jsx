import { Container, Nav,Navbar,Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import user from "../../../server/Models/userModel";
const NavBar  = () => {
    return (  <Navbar bg="dark" className="mb-4" style = {{height : "3.75rem"}}>
    
   
    <Container>
        <h2>
            <Link to = "/" className="link-light text-decoration -none">
            
            ChatApp
            </Link>
           
        </h2>
        {
            user && <span className="text-warning"> Logged in as {user ?.name} </span>
        }
        
        <Nav>
         <Stack direction="horizontal" gap={3}>

            {
               user && (
                <>
                <Link onClick={()=>logOutUser()} to = "/register" className="link-light text-decoration-none">
            LogOut
            
            </Link>
                
                </>
               )


            }
            {
                !user && (
                    <>
                     <Link to = "/login" className="link-light text-decoration-none">
            Login
            
            </Link>
            <Link to = "/Register" className="link-light text-decoration-none">
            Register
            
            </Link>
                    
                    
                    </>
                ) 
            }
           
            
             



         </Stack>


        </Nav>
    </Container>
    
    
    </Navbar>);
}
 
export default NavBar ;