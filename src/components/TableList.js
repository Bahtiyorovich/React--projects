import React, {useState} from 'react';
import '../styles/table-style.css'
import FormControl from './FormControl';
import Table from './Table'

const TableList = () => {
    const [posts, setPosts] = useState([
        {id:1, title: "Html", stack: "template"},
        {id:2, title: "CSS", stack:"style"},
        {id:3, title: "Bootstrap", stack:"Library"}
    ]);

    /* Element qo'shish tugmasiga funksiya qo'shish */
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    
    /*O'chirish tugmasiga funksiya qo'shish */
    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    return (
        <>
            <FormControl createPost={createPost}/>
            {posts.length 
                ? <Table remove={removePost} posts={posts} title={'Programming Language'}/>
                : <p className="alert alert-danger text-center" role="alert">you should add some post</p>
            }
        </>    
        );
};

export default TableList;