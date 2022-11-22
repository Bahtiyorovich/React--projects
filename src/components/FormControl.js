import React, {useState} from 'react';
import '../styles/form-style.css'
import MyButton from '../UI/buttons/MyButton';
import MyInput from '../UI/inputs/MyInput'
import MySelect from '../UI/select/MySelect'
const FormControl = ({createPost}, props) => {

    const [select, setSelect] = useState('');

    /*const [title, setTitle] = useState('');*/
    /*const inputRef = useRef(); Boshqarib bo'lmaydigan formalar 
    bilan ishlashda {useRef}dan foydalaniladi*/

    /*const [stack, setStack] = useState('');*/

    const [post, setPost] = useState({title: '', stack: ''})

    const addPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, /* eski holatni nusxalash uchun spret operatori */
            id: Date.now()
        }
        createPost(newPost);
        setPost({title: "", stack: ""})
    }

    const sortPost = (sort) => {
        setSelect(sort)
        props.setPosts([props.posts].sort((a, b)=> a[sort].localeCompare(b[sort])) )
    }

    return (
    <div className="form-style">
        <h3 className="text-center">Enter new post</h3>
        <form className="mb-3 mx-auto">
           <MyInput
                type="text"
                className="form-control"
                placeholder="Enter programming Language"
                value={post.title}
                onChange={(e => setPost({...post, title: e.target.value}))}
                /*ref={inputRef}*/
           /> 
           <MyInput
                type="text"
                className="form-control"
                placeholder="Enter faourite stack"
                value={post.stack}
                onChange={(e => setPost({...post, stack: e.target.value}))}
                /*ref={inputRef}*/
           /> 
           
           {(post.title && post.stack !== '')
            ? <MyButton onClick={addPost} > ADD POST </MyButton>
            : <p className="alert alert-success text-center w-50 start-50" role="alert">You should enter new programming Language</p>
           }
           <div class="d-flex flex-row-reverse my-2">
                <MySelect className="form-select w-50" aria-label="Default select example"
                    value={select}
                    onChange={sortPost}
                    defaultValue="Sorted by..."
                    options={[
                        {value: "title", name: "Programming"},
                        {value: "stack", name: "Sorted By Stack"}
                    ]}
                />
            </div>
        </form>
    </div>
    );
};

export default FormControl;