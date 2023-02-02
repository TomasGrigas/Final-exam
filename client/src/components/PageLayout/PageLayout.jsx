import { useContext } from "react"
import { Navigate, Outlet, useNavigate } from "react-router"
import { LOCAL_STORAGE_JWT_TOKEN_KEY } from "../../constants/constants"
import { UserContext } from "../../contexts/UserContextWrapper"
import { Button } from "../Button/Button"

export const PageLayout= () => {
    const {user, setUser}  = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/login" />
    } 

    const handleLogOut = () => {
        navigate('/login');
        localStorage.removeItem(LOCAL_STORAGE_JWT_TOKEN_KEY);
        setUser(null);
        
    }

    return(
        <div>
            <Button onClick ={handleLogOut}>Log out</Button>
            <Outlet />
        </div>
    )
}