import React from "react";
import '../styles/table-style.css'
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const Table = ({posts, title, remove})=> {
    return (
        <div className="table-style">
            <h3 className="text-center">{title}</h3>
            <hr/>
            <table className="table table-hover ">
                <TableHeader/>
                <tbody>
                    {posts.map((post, index) => (
                        /*yagona qiymat "key={id}" eng maqul variant */
                        <TableItem remove={remove} number = {index + 1} post={post} key={post.id}/>
                    ))}
                </tbody>
            </table>
        </div> 
    )
}

export default Table;