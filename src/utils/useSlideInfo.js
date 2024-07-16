import { useEffect, useState } from "react";
import { SLIDE_API } from "../constants/apis";

const useSlideInfo =()=>{
    const [slideInfo, setSlideInfo]=useState(null);
    useEffect(()=>{
        fetchData()
    },[]);

const fetchData=async()=>{
    const data=await fetch(SLIDE_API);
    const json=await data.json();
    console.log(json.data);
    setSlideInfo(json.data);
}

return slideInfo;
};


export default useSlideInfo;