import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

interface IprotectedProps {
  children: JSX.Element;
}

const Protected = ({ children }: IprotectedProps) => {
const user=auth.currentUser;
if(!user)
{
    return <Navigate to="/" />
}
return children;
  
};
export default Protected;
