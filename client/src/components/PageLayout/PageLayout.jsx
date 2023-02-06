import { useContext } from "react"
import { Navigate, Outlet, useNavigate } from "react-router"
import { LOCAL_STORAGE_JWT_TOKEN_KEY } from "../../constants/constants"
import { UserContext } from "../../contexts/UserContextWrapper"
import { Button } from "../Button/Button"
import { Header, AttendeesBgStyled, ImageStyled, CenterImageStyled , TourStyled, OutletStyled} from "../StyledComponents/styledcomponents"


export const PageLayout= () => {
    const {user, setUser}  = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/login" />
    } 

    const handleLogOut = () => {
        localStorage.removeItem(LOCAL_STORAGE_JWT_TOKEN_KEY);
        setUser(null);   
        navigate('/login');  
        window.location.reload()
    }

    return(
        <AttendeesBgStyled>
            <Header>
                <Button onClick ={handleLogOut}>Log out</Button>
            </Header>
            <CenterImageStyled>
                <ImageStyled>COLDPLAY</ImageStyled>
            </CenterImageStyled>
            <TourStyled>WORLD TOUR 2023</TourStyled>
            <TourStyled>Attendees List</TourStyled>
            <OutletStyled>
                <Outlet />
            </OutletStyled>
            
        </AttendeesBgStyled>
    )
}