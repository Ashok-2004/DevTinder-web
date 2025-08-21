import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch() 
  const navigate=useNavigate()
  const handleLogout=async ()=>{
    try{
      await axios.post(Base_URL+"/logout",{},{withCredentials:true})
      dispatch(removeUser())
      navigate("/login")
    }
    catch(err){

    }
  }
  return (
    <div className="navbar bg-base-100 shadow-sm" data-theme="dark">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <span className="text-sm font-medium">
              Welcome, <span className="text-primary">{user.firstName}</span>
            </span>

            <div className="dropdown dropdown-end mx-5">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile <span className="badge">New</span>
                  </Link>
                </li>
                <li><Link to="/connections">Connections</Link></li>
                <li><Link to="/requests">Requests</Link></li>
                <li><a className="text-red-500" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </>
        ) }
      </div>
    </div>
  );
};

export default NavBar;
