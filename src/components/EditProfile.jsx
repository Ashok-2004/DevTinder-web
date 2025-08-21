import { useState } from "react";
import UserCard from "./UserCard";
import { Base_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoURL,setPhotoURL]=useState(user.photoURL)
  const [age,setAge]=useState(user.age || 20)
  const[gender,setGender]=useState(user.gender)
  const[about,setAbout]=useState(user.about)
  const [error,setError]=useState(false)
  const [showToast,setShowToast]=useState(false)
  const dispatch=useDispatch()
  const setProfile= async ()=>{
    setShowToast(true)
    setError("")
    try{
      const res=await axios.patch(Base_URL+"/profile/edit",{firstName,lastName,photoURL,age,gender,about},{withCredentials:true});
      dispatch(addUser(res?.data?.data))
    }
    catch(err){
      setError(err?.response?.data)
    }
  }
   setTimeout(()=>{
    setShowToast(false)
  },3000)
  return (
  <>
    <div className="flex justify-center my-10">
    <div className="flex justify-center mx-10">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

          <form className="mt-4 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">FirstName</span>              </label>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">lastName</span>
              </label>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                value={photoURL}
                className="input input-bordered w-full"
                onChange={(e) => setPhotoURL(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">age</span>
              </label>
              <input
                type="text"
                value={age}
                className="input input-bordered w-full"
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">gender</span>
              </label>
              <input
                type="text"
                value={gender}
                className="input input-bordered w-full"
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">about</span>
              </label>
              <input
                type="textarea"
                value={about}
                className="input input-bordered w-full"
                onChange={(e) => setAbout(e.target.value)}
                required
                />
                <div className="text-red-500">{error}</div>
            </div>
            <button onClick={(e)=>{
               e.preventDefault(); 
               setProfile();
            }} className="btn btn-primary w-full mt-2">
              Change Profile
            </button>
          </form>
        </div>
      </div>
    </div>
    <UserCard user={{firstName,lastName,photoURL,age,gender,about}}/>
    </div>
    {showToast && <div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
        </div>
    </div>}
  </>
  );
};

export default EditProfile;
