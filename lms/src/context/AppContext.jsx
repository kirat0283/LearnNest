import { createContext ,useState,useEffect} from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppContextProvider = (props)=>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses,setAllCourses] = useState([])
    //fetching courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }

    useEffect(()=>{
        fetchAllCourses()
    },[])
    const value ={
        currency ,allCourses,navigate
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
            </AppContext.Provider>
    )
}