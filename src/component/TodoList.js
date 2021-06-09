import axios from "axios";
import { useEffect, useState } from "react";
import PageList from "./PageList";


const TodoList = ({page = 1}) => {
   
   const [current, setCurrent] = useState(page)
   
   const [dtoList, setDtoList] = useState([])

   //const [pageList, setPageList] = useState([])

   const [resultDTO, setResultDTO] = useState({
        pageList:[]
    })

    const movePage = (num) => {
        setCurrent(num)
    }
   
    useEffect(() => {//useEffect를 사용하면 한번만 호출 된다는게 주요 포인트
       axios.get("http://localhost:8080/todo/pages?page=" + current)
       .then(res => {
           setDtoList(res.data.dtoList)
           setResultDTO(res.data)//data안에 모든게 다 들어있으니까 수정함
       })
   }, [current])
   

   const list = dtoList.map(todo => <li key={todo.tno}>{todo.tno} -- {todo.title}</li>)
   //const pageButtons = pageList.map(i => <button key={i} onClick={() => setCurrent(i) }>{i}</button>)

    return ( 
        <div>
            <ul>
                {list}
            </ul>

            <PageList {...resultDTO} movePage={movePage}></PageList>

        </div>

     );
}
 
export default TodoList;