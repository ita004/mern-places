import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlace from './places/pages/UserPlace'
import UpdatePlace from './places/pages/UpdatePlace'
import { AuthContext } from './shared/context/auth-context'

import './index.css'
import Auth from './user/pages/Auth';
import { useAuth } from './shared/hooks/auth-hook'



function App() {

  const { token, login, logout, userId } = useAuth();

   let routes;
   if(token){
    routes = (
      <>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/:userId/places" element={<UserPlace />} />
          <Route exact path="/places/new" element={<NewPlace />} />
          <Route exact path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    );
   } else{
    routes = (
      <>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/:userId/places" element={<UserPlace />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </>
    );
   }

  return (
   
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <MainNavigation />
          <main>{routes}</main>
        </Router>
      </AuthContext.Provider>
   
  );
}

export default App
