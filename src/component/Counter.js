import { useCallback, useState } from "react";


const Counter = () => {
    
    const [value, setvalue] = useState(10)

    const plus = useCallback(() => {
        setvalue(value + 1) 
    })
    //마이너스는 반대로 하나 만들어주면 되겠지?
    
    return ( 
        <div>
            <h1>COUNT {value}</h1>
            <button onClick={plus}>++</button>
            <button>--</button>
        </div>

     );
}
 
export default Counter;