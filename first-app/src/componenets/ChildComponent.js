import { useContext } from "react";
import UserContext from './UserProvider'

function ChildComponent() {
   const userName = useContext(UserContext);
 
   return (
     <div>
       <h2>Hello, {userName}!</h2>
     </div>
   );
 }

 export default ChildComponent