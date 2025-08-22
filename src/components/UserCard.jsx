import axios from 'axios'
import { Base_URL } from "../utils/constants"
import { useDispatch } from 'react-redux'
import { removeFeed } from '../utils/feedSlice'
const UserCard=({user})=>{
    const {_id,firstName,lastName,photoURL,gender,age,about}=user
    const dispatch=useDispatch()
    const handleRequest=async (status,_id)=>{
        const res=await axios.post(Base_URL+"/request/send/"+status+"/"+_id,{},{withCredentials:true})
        dispatch(removeFeed(_id))
        }
    return(
    <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src={photoURL}
            alt="photo" />
             </figure>
              <div className="card-body">
                <h2 className="card-title">{firstName+" "+lastName}</h2>
                {age && gender&& <p>{age+","+gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary" onClick={()=>handleRequest("ignored",_id)}>Ignore</button>
                    <button className="btn btn-secondary" onClick={()=>handleRequest("interested",_id)}>Interested</button></div>
                     </div>
                     </div>
    )
}
export default UserCard