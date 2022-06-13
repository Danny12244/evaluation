import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const {isAuthenticated}=useSelector(state=>state.auth.data)
  if(isAuthenticated){
    return children
  }

  return <Navigate to="/login" />
};

export default RequiredAuth;
