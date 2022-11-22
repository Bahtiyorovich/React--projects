import React, {useState} from "react";
import '../components_styles/content.css';


const Content = () => {

    const [toggle, setToggle] = useState(false);
    

    return (

        <>
            <button
            onClick={() => setToggle(!toggle)}
            className="content-btn btn btn-primary"
            >
                Toggle btn
            </button>
            {toggle
                /*Bu kod ternary operatirga misol */

                ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRpz0c9BhWlts9F_xiqaf59El0_JHY6Zz1g&usqp=CAU " alt="xatolik"/>
                
                : null
            
            }
           
        </>
    )
}

export default Content;