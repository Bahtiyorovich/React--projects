import React, {useState} from "react";
import '../components_styles/count.css';



/* Bu reactjsda qilingan 'useState' 
dan foydalanish uchun mo'ljallangan mashq */

const Count = () => {

    let [count, setCount] = useState(0);

    function incr() {
        setCount( prev => prev + 1);
    }

    function decr() {
        if(count > 0){
            setCount( prev => prev - 1);
        }
    }

    return(

        <div className="count">
            <h1>Count: {count}</h1>
            <button onClick={incr} type="button" className="btn btn-success">INCR</button>
            <button onClick={decr} type="button" className="btn btn-danger">DECR</button>
        </div>
    )
}

export default Count;