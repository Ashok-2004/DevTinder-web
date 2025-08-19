import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser} from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Base_URL } from "../utils/constants";
const Login = () => {
  const [email, setEmail] = useState("ashok@gmail.com");
  const [password, setPassword] = useState("Ashok@123");
  const [error,SetError]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(Base_URL+"/login", {
        email,
        password,
      },{withCredentials:true}
     );
      dispatch(addUser(res.data))
      return navigate("/");
    } catch (err) {
      SetError(err?.response?.data || "something went wrong")
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-base-200 pt-20">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form className="mt-4 space-y-4" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="input input-bordered w-full"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <p className="text-red-500">{error}</p>
            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
