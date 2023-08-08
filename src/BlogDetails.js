import { Link, useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';



const BlogDetails = () => {
    const { id } =useParams();
    const { data:blog, error, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory('');

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then (() =>{
            console.log('new blog deleted');
            history.push('/');

        })
       
    
    
    
    
    }   
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div> }
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete blog </button>
                   <Link to='/Create'><button>Edit Blog <AiOutlineEdit style={
                    {color:'white',
                    fontSize:'13px',
                    backgroundColor:'white',
                   }}/></button></Link>
                </article>
            )}


        </div>
     );
}
 export default BlogDetails;