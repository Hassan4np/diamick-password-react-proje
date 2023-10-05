
import { useCallback, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/Authcontext";

const Header = () =>{
    const {user,Logout} = useContext(AuthContext)
 const Logouts=()=>{
      Logout(()=>{
        console.log('LOGOUT SUCCESSFULL');
      })
      .then()
      .catch(error=>{
        console.log(error)
      })
 }
 const links = <>
    <NavLink className="mr-5" to="/">Home</NavLink>
    <NavLink className="mr-5" to="/login">Login</NavLink>
    <NavLink className="mr-5" to="/signup">Signup</NavLink>
    <NavLink to="/order">Orders</NavLink>
    {user &&
        <>
          <NavLink to="/profile">Profile</NavLink>
         <NavLink to="/order">rode</NavLink>
         <NavLink to="/order">name</NavLink>
        </>
    }
       

</>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                      {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Hassan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?<>
                    <span>{user.email}</span>
                    <a className="btn btn-primary" onClick={Logouts}>Signout</a>
                    </>: <NavLink className="btn btn-success" to="/login">login</NavLink>
                }
               
            </div>
        </div>
    );
};

export default Header;