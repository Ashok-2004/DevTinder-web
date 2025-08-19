import { useDispatch, useSelector } from "react-redux"
import { Base_URL } from "../utils/constants"
import axios from "axios"
import {addFeed} from '../utils/feedSlice'
import { useEffect } from "react"
import UserCard from "./UserCard"
const Feed=()=>{
    const feed=useSelector((store)=>store.feed)
    const dispatch=useDispatch()
    const getFeed=async ()=>{
        const feed=await axios.get(Base_URL+"/feed",{withCredentials:true})
        dispatch(addFeed(feed?.data?.user))
    }
    useEffect(()=>{
        getFeed();  
    },[])
    return feed && (
        <div className="flex justify-center my-10"> 
        <UserCard user={feed[0]}/>
        </div>
    )
}
export default Feed