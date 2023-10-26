import ChildComponent from "./ChildComponent";
import UserProvider from "./UserProvider";

function Parent() {
   return (
      <UserProvider>
         <ChildComponent />
      </UserProvider>
   );
}

export default Parent;