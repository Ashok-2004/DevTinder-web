import axios from "axios"
import { Base_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addrequests } from "../utils/requestSlice";
import { useEffect } from "react";
const Request=()=>{
    const requests=useSelector((store)=>store.requests)
    const dispatch=useDispatch();
    useEffect(()=>{
            fetchRequest()
        },[])
        const fetchRequest=async ()=>{
            try{
            const res=await axios.get(Base_URL+"/user/request/recieved",{withCredentials:true})
            console.log(res)
            dispatch(addrequests(res.data.data))
        }
         catch(err){  
        }
    }
    if(!requests) return
    if(requests.length===0) return <h1>No Request Found</h1>
    return(
        <div className="text-center my-10">
            <h1 className="text-bold text-3xl">Requests</h1>
            {requests.map((request)=>{
                const {_id,firstName,lastName,photoURL,age,gender,about}=request.fromUserId
                return(
                <div key={_id} className="flex justify-between items-center m-4 p-4 border rounded-lg bg-base-200 w-1/2 mx-auto">
                    <div><img  alt="photo" className="w-20 h-20 rounded-full" src={photoURL}/></div>
                    <div className="text-left mx-4"> <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
                    <p>{age && gender && age+" "+gender}</p>
                        <p>{about}</p></div>
                        <div><button className="btn btn-primary mx-2">Primary</button>
                        <button className="btn btn-secondary mx-2">Secondary</button></div>   
                </div>
                )
                })}
        </div>
    )
}
export default Request;