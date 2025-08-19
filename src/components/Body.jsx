import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Base_URL } from "../utils/constants"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser } from "../utils/userSlice"
const Body=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const userData = useSelector((store) => store.user); 
    const fetchUser=async ()=>{
        try{
            const user=await axios.get(Base_URL+"/profile/view",{
                withCredentials:true
            })
            console.log(user)
            dispatch(addUser(user.data))
        }
        catch(err){
            if(err.status===401){
                navigate("/login")
            }
                console.log(err)
        }
    }
    useEffect(()=>{
        if(!userData){
            fetchUser([userData])
        }
    },[])
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Body