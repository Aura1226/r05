import axios from "axios";
import { useEffect, useState } from "react";

const TimeDisplay = () => {
   
   const [time, setTime] = useState('')
   
    //프로퍼티... 불변?
   const getTime = async () => {
        const res = await axios.get("http://localhost:8080/todo/now") //then 대신 await 사용해서 기다렸다 받음
        console.log(res)
        setTime(res.data)
   }

   //useEffect는 비동기 처리할 때 자주 쓴다.
   useEffect(() => {

   },[]) //[] = 디펜즈온 얘가 어떤 애의 의존적

   getTime()
   
    return ( 
        <div>
            <h1>{time}</h1>
        </div>
     );
}
 
export default TimeDisplay;