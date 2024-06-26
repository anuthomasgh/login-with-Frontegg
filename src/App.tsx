import './App.css';
// import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
const handleClick = () => {
  AdminPortal.show();
};


//   Uncomment this to redirect to login automatically
//   useEffect(() => {
//     if (!isAuthenticated) {
 //      loginWithRedirect();
  //   }
   //}, [isAuthenticated, loginWithRedirect]);
  
  const logout = () => {
   const baseUrl = ContextHolder.getContext().baseUrl;
   window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  
  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img width="100" height="80" src={user?.profilePictureUrl || undefined} alt={user?.name}/>
<p> </p>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
<p> </p>
          </div>
          <div>

            <button  onClick={() => alert(user?.accessToken)}>What is my access token? &nbsp; </button>
	    <button  onClick={handleClick}>Settings &nbsp;</button>
            <button onClick={() => logout()}>Click to logout &nbsp;</button>

          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click here to login</button>
        </div>

      )}
    </div>
  );
}

export default App;
